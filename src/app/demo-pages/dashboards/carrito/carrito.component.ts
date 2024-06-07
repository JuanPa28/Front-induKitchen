import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CarritoDto} from "../../../shared/model/carritoDto";
import {CarritoService} from "../../../shared/services/carrito.service";
import {EventosCarritoService} from "../../../shared/services/eventos-carrito.service";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";

@Component({
    selector: 'app-controls',
    templateUrl: './carrito.component.html',
    styles: [],
    providers: [MessageService]

})
export class CarritoComponent implements OnInit {

    heading = 'Checkout';
    subheading = 'En esta página podrás ingresar tu información de pago y de envío de los productos que tienes en tu carrito.';
    icon = 'faCashRegister';
    frmCarrito: FormGroup;
    submitted: boolean;

    constructor(private fb: FormBuilder,
                private carritoService: CarritoService,
                private eventosCarritoService: EventosCarritoService,
                private router: Router,
                private messageService: MessageService) {
    }

    ngOnInit() {
        this.frmCarrito = this.fb.group({
            cedula: new FormControl('', [
                Validators.required]),
            nombre: new FormControl('', [
                Validators.required]),
            direccion: new FormControl('', [
                Validators.required]),
            correo: new FormControl('', [
                Validators.required,
                Validators.email
            ]),
            telefono: new FormControl('', [
                Validators.required]),
        })
    }

    get frmCarritoControls() {
        return this.frmCarrito.controls;
    }

    AlmacenarCarrito() {
        this.submitted = true;

        if (this.frmCarrito.valid) {
            let carrito: CarritoDto = JSON.parse(localStorage.getItem('carrito'));
            carrito.cliente = this.frmCarrito.value;
            this.carritoService.crearCarrito(carrito).subscribe(response => {
                console.log(response);
                this.eventosCarritoService.vaciarCarrito();
                this.messageService.add({
                    severity: 'success',
                    summary: 'El registro ha sido exitoso, revise su bandeja de entrada',
                    detail: 'Creación carrito'
                });
                this.router.navigate(['/productos']);

            })
        }
    }
}
