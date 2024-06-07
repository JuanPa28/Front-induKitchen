import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {ProductoDto} from "../model/producto.dto";
import {CarritoDto} from "../model/carritoDto";

@Injectable({
    providedIn: 'root'
})
export class CarritoService {
    private API_SERVER = "http://localhost:8081/api/carritos"

    constructor(private httpClient: HttpClient) {
    }

    crearCarrito(carrito: CarritoDto): Observable<CarritoDto>{
        return this.httpClient.post<CarritoDto>(this.API_SERVER, carrito);
    }
}
