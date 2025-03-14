import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';  // <-- Importamos el modulo router

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterModule],  // <-- Aquí pongo el modulo de router
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {}

