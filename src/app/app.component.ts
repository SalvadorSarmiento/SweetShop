import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],  // <-- Importa CommonModule
  templateUrl: './inicio/inicio.component.html',
  styleUrls: ['./inicio/inicio.component.css']
})
export class AppComponent {
  title = 'SweetShop';
  sidebarActive = true; 

  constructor(private cdr: ChangeDetectorRef) {}

  toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
    this.cdr.detectChanges();  // Asegura que Angular refleje el cambio
  }
}
