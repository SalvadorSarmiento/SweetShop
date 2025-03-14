import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';  // <-- Importar RouterModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],  // <-- Agregar RouterModule aquí
  templateUrl: './inicio/inicio.component.html',
  styleUrls: ['./inicio/inicio.component.css']
})
export class AppComponent {
  title = 'SweetShop';
  sidebarActive = true; 

  constructor(private cdr: ChangeDetectorRef) {}

  toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
    this.cdr.detectChanges();
  }
}
