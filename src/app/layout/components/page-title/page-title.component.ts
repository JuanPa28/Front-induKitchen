import {Component, Input} from '@angular/core';
import {faCashRegister, faPlus, faStar} from '@fortawesome/free-solid-svg-icons';
import {EventosCarritoService} from "../../../shared/services/eventos-carrito.service";

@Component({
    selector: 'app-page-title',
    templateUrl: './page-title.component.html',
})
export class PageTitleComponent {

    faStar = faStar;
    faPlus = faPlus;

    @Input() heading;
    @Input() subheading;
    @Input() icon;

    constructor(public eventosCarritoService: EventosCarritoService) {
    }

    protected readonly faCashRegister = faCashRegister;

    vaciarCarrito() {
        this.eventosCarritoService.vaciarCarrito();
    }
}
