import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductosService } from '../services/productos.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-barra-horizontal-de-navegacion',
  templateUrl: './barra-horizontal-de-navegacion.component.html',
  styleUrls: ['./barra-horizontal-de-navegacion.component.css'],
  imports: [CommonModule, RouterModule, FormsModule],
  standalone: true
})
export class BarraHorizontalDeNavegacionComponent implements OnInit {
  productos: any[] = [];  // Lista de productos original
  productosFiltrados: any[] = []; // Lista filtrada
  query: string = ''; // Búsqueda

  constructor(private productosService: ProductosService) {}

  ngOnInit() {
    this.cargarProductos(); // Cargar productos al iniciar el componente
  }

  cargarProductos() {
    this.productosService.getProductos().subscribe({
      next: (data) => {
        this.productos = data;
        this.productosFiltrados = data; // Inicialmente muestra todos
      },
      error: (err) => console.error('❌ Error al obtener productos:', err),
    });
  }

  buscar() {
      this.productosService.filtrarProductos(this.query);
    }; 
}
