import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  cargando: boolean = true; // 🔹 Controla el loader
  productos: any[] = [];    // 🔹 Lista original de productos
  productosFiltrados: any[] = []; // 🔹 Lista de productos filtrados
  query: string = '';  // 🔹 Texto de búsqueda

  constructor(private productosService: ProductosService) {}

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos() {
    this.cargando = true; // 🔹 Activar loader antes de la petición

    this.productosService.getProductos().subscribe({
      next: (data) => {
        this.productos = data;
        this.productosFiltrados = data; // 🔹 Mostrar todos los productos al inicio

        // 🔹 Mantener el loader visible por 1 segundo antes de ocultarlo
        setTimeout(() => {
          this.cargando = false;
        }, 1000);
      },
      error: (err) => {
        console.error('❌ Error al obtener productos:', err);

        // 🔹 Ocultar loader en caso de error después de 1 segundo
        setTimeout(() => {
          this.cargando = false;
        }, 1000);
      }
    });
}


buscar() {
  this.cargando = true; // ✅ Activar el loader durante la búsqueda

  setTimeout(() => {
      if (!this.query.trim()) {
          this.productosFiltrados = this.productos;
      } else {
          this.productosFiltrados = this.productos.filter(producto =>
              producto.nombre.toLowerCase().includes(this.query.toLowerCase())
          );
      }
      this.cargando = false; // ✅ Ocultar loader después del tiempo de carga
  }, 1000); // ⏳ Simulación de carga breve de 1 segundo
}


  sanitizeUrl(url: string): string {
    return url.replace('http://localhost:3001/uploads/http://localhost:3001/uploads/', 'http://localhost:3001/uploads/');
  }
}
