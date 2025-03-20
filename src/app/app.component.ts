import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderGlobalComponent } from './loader-global/loader-global.component';
import { RouterModule, Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { LoaderService } from './services/loader.service';
import { TituloPrincipalComponent } from './titulo-principal/titulo-principal.component';
import { BarraHorizontalDeNavegacionComponent } from './barra-horizontal-de-navegacion/barra-horizontal-de-navegacion.component';
import { FooterComponent } from './footer/footer.component';
import { ProductosService } from './services/productos.service';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LoaderGlobalComponent, TituloPrincipalComponent, RouterModule, BarraHorizontalDeNavegacionComponent, FooterComponent, BarraLateralComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductosService]
})
export class AppComponent implements OnInit {
  title = 'SweetShop';
  productos: any[] = [];
  isLoading$; // Declaramos la variable sin asignar valor

  constructor(
    private productosService: ProductosService,
    public loaderService: LoaderService, // Usamos `public` para que esté accesible en el template
    private router: Router
  ) {
    this.isLoading$ = this.loaderService.isLoading$; // Ahora la asignamos dentro del constructor
  }

  ngOnInit() {
    this.loaderService.show(); // Activamos el loader antes de cargar productos

    setTimeout(() => {
      this.productosService.getProductos().subscribe(data => {
        this.productos = data;
        console.log('📦 Productos cargados: ', this.productos);
        this.loaderService.hide(); // Ocultamos el loader al terminar la carga
      });
    }, 2000); // Simulación de carga de 2 segundos

    // Escuchar eventos de navegación para mostrar/ocultar el loader
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loaderService.show();
      } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        setTimeout(() => this.loaderService.hide(), 1000); // Simulación de carga al navegar
      }
    });
  }
}
