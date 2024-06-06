import {Component, OnInit} from '@angular/core';
import {ProductosService} from 'src/app/shared/services/productos.service';
import {ProductoDto} from "../../../shared/model/producto.dto";
import {SelectItem} from "primeng/api";

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
        public productosService: ProductosService
    ) {
    }

    ngOnInit(): void {
        this.productosService.getProductos().subscribe(
            response=> {
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
        }
        else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    }

    /*agregar(): void {
      this.productosService.agregar().subscribe(resp => {

      },
      error => { console.error(error) }
      );
    }*/

}
