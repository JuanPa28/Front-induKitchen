import {BehaviorSubject, Observable} from 'rxjs';
import {Injectable} from "@angular/core";
import {CarritoDto} from "../model/carritoDto";

@Injectable({providedIn: 'root'})
export class EventosCarritoService {
    carritoValue: BehaviorSubject<CarritoDto> = new BehaviorSubject<CarritoDto>(new CarritoDto());

    actualizarCarrito(value: CarritoDto){
        this.carritoValue.next(value); // this will make sure to tell every subscriber about the change.
        localStorage.setItem('carrito', JSON.stringify(value));
    }

    vaciarCarrito(){
        localStorage.clear();
        this.carritoValue.next(new CarritoDto()); // this will make sure to tell every subscriber about the change.
    }

}