import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {ProductoDto} from "../model/producto.dto";

@Injectable({
    providedIn: 'root'
})
export class ProductosService {
    private API_SERVER = "http://localhost:8081/api/productos"

    constructor(private httpClient: HttpClient) {
    }

    getProductos(): Observable<ProductoDto[]> {
        return this.httpClient.get<ProductoDto[]>(this.API_SERVER);
    }
}
