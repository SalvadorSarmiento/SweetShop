import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';  // <-- Importar RouterModule

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterModule],  // <-- Agregar aquí
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {}

