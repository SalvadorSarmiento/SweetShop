import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private apiUrl = 'http://localhost:3001/api/productos';
  private productos: any[] = [];
  private productosFiltrados = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  cargarProductos() {
    this.http.get<any[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.productos = data;
        this.productosFiltrados.next(data);
      },
      error: (err) => console.error('❌ Error al obtener productos:', err),
    });
  }

  getProductos(): Observable<any[]> {
    return this.productosFiltrados.asObservable();
  }

  filtrarProductos(query: string) {
    if (!query.trim()) {
      this.productosFiltrados.next(this.productos);
    } else {
      const filtrados = this.productos.filter(producto =>
        producto.nombre.toLowerCase().includes(query.toLowerCase())
      );
      this.productosFiltrados.next(filtrados);
    }
  }
}
