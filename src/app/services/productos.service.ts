import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private apiUrl = 'http://localhost:3001/productos';//Prueba de locacion de URL

  constructor(private http: HttpClient) { }

  getProductos(): Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }

}