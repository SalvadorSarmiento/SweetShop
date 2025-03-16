import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { InicioComponent } from './app/inicio/inicio.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
