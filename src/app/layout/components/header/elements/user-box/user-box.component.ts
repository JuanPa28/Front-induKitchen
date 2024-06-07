import {Component, HostListener, OnInit} from '@angular/core';
import {ThemeOptions} from '../../../../../theme-options';
import {EventosCarritoService} from "../../../../../shared/services/eventos-carrito.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-user-box',
    templateUrl: './user-box.component.html',
})
export class UserBoxComponent implements OnInit {
    cantidadElementos: number = 2;

    constructor(public globals: ThemeOptions,
                public eventosCarritoService: EventosCarritoService,
                public router: Router) {
    }

    ngOnInit() {
        this.eventosCarritoService.carritoValue.subscribe(carrito => {
            console.log('carrito', carrito);
            this.cantidadElementos =carrito.detalles.reduce((sum, detalle) => sum + detalle.cantidad, 0);
        })
    }

    verCarrito() {
        this.router.navigate(['/carrito'])
    }
}
