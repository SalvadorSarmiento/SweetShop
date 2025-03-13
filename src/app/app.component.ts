import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],  // <-- Importa CommonModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
