import { Routes } from '@angular/router';
import { InformacionComponent } from './informacion/informacion.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: 'app', component: AppComponent }, // Página de inicio
  { path: 'informacion', component: InformacionComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'ofertas', component: OfertasComponent },
];
