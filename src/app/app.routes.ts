import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InformacionComponent } from './informacion/informacion.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { OfertasComponent } from './ofertas/ofertas.component';

export const routes: Routes = [
  { path: '', component: AppComponent }, // Página de inicio (AppComponent)
  { path: 'informacion', component: InformacionComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'ofertas', component: OfertasComponent },
  { path: '**', redirectTo: '' } // Redirige rutas inválidas a la página de inicio
];
