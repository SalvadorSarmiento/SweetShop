import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';  
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterModule],  
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  private http = inject(HttpClient);
  productos: any[] = [];

  constructor() {
    this.cargarProductos();
  }

  cargarProductos() {
    this.http.get<any[]>('http://localhost:3000/productos').subscribe({
      next: (data) => (this.productos = data),
      error: (err) => console.error('Error al obtener productos', err),
    });
  }
}






