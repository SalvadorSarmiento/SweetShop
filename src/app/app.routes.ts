import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { InformacionComponent } from './informacion/informacion.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';


export const routes: Routes = [
  { path: 'inicio', component: InicioComponent }, // Página de inicio (inicio.component.html)
  { path: 'informacion', component: InformacionComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'ofertas', component: OfertasComponent },
  { path: '**', redirectTo: 'inicio' } // Redirige rutas inválidas a la página de inicio
];
