import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ProductosService } from '../services/productos.service';
@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  private http = inject(HttpClient);
  productos: any[] = [];         // Lista original de productos
  productosFiltrados: any[] = []; // Lista para mostrar productos filtrados
  query: string = '';             // Almacena el texto de búsqueda

  constructor(private productosService: ProductosService) {
    this.cargarProductos();
  }

  ngOnInit() {
    this.productosService.getProductos().subscribe(productos => {
      this.productos = productos;
    });
  }
  cargarProductos() {
    this.http.get<any[]>('http://localhost:3001/api/productos').subscribe({
      next: (data) => {
        this.productos = data;
        this.productosFiltrados = data; // Inicialmente, mostrar todos los productos
      },
      error: (err) => console.error('❌ Error al obtener productos:', err),
    });
  }

  buscar() {
    if (!this.query.trim()) {
      this.productosFiltrados = this.productos; // Si el input está vacío, mostrar todo
      return;
    }

    this.productosFiltrados = this.productos.filter(producto =>
      producto.nombre.toLowerCase().includes(this.query.toLowerCase())
    );
  }

  sanitizeUrl(url: string): string {
    return url.replace('http://localhost:3001/uploads/http://localhost:3001/uploads/', 'http://localhost:3001/uploads/');
  }
}
