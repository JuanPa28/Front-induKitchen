import {Component, OnInit} from '@angular/core';
import {ProductosService} from 'src/app/shared/services/productos.service';
import {ProductoDto} from "../../../shared/model/producto.dto";
import {SelectItem} from "primeng/api";
import {DetalleDto} from "../../../shared/model/detalle.dto";
import {CarritoDto} from "../../../shared/model/carritoDto";
import {EventosCarritoService} from "../../../shared/services/eventos-carrito.service";

@Component({
    selector: 'app-productos',
    templateUrl: './productos.component.html',
    styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

    productos: ProductoDto[] = [];
    sortOptions: SelectItem[];
    sortOrder: number;
    sortField: string;


    constructor(
        public productosService: ProductosService,
        public eventosCarritoService: EventosCarritoService
    ) {
    }

    ngOnInit(): void {
        this.productosService.getProductos().subscribe(
            response => {
                this.productos = response;
            }
        );
        this.sortOptions = [
            {label: 'Mayor a menor precio', value: '!precio'},
            {label: 'Menor a mayor precio', value: 'precio'}
        ];

    }

    onSortChange(event) {
        let value = event.value;

        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        } else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    }

    agregarAlCarrito(producto: ProductoDto) {
        if (producto.cantidadEnCarrito) {
            producto.cantidadEnCarrito++;
        } else {
            producto.cantidadEnCarrito = 1;
        }
        let carrito: CarritoDto = JSON.parse(localStorage.getItem('carrito'));
        if (carrito) {
            let encontrado = false;
            for (let detalle of carrito.detalles) {
                if (detalle.idProducto === producto.id) { // case sensitive
                    detalle.cantidad++;
                    encontrado = true;
                    break;
                }
            }
            if (!encontrado) {
                carrito.detalles.push({'idProducto': producto.id, 'cantidad': 1});
            }
        } else {
            carrito = new CarritoDto();

            carrito.detalles.push({'idProducto': producto.id, 'cantidad': 1});
        }
        this.eventosCarritoService.actualizarCarrito(carrito);
    }
}
