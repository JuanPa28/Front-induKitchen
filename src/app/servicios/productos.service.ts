import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private API_SERVER = "http://localhost:8090/api/carritos"

  constructor(private http: HttpClient) { }

  public agregar(carrito: any): Observable<any> {
    return this.http.post(`${this.API_SERVER}`, carrito)
  }
}
