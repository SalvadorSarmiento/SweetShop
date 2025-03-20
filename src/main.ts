import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { InicioComponent } from './app/inicio/inicio.component';
import { LoaderGlobalComponent } from './app/loader-global/loader-global.component';


bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [...(appConfig.providers || [])], // Asegura que los providers de appConfig se mantengan
})
  .catch((err) => console.error(err));
