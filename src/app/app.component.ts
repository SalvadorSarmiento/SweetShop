import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';  //Importamos el RouterModule
import { FooterComponent } from './footer/footer.component';  // Importamos el Footer

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, FooterComponent],  // Agregammos el Footer/RouteR
  templateUrl: './app.component.html',  // Apuntando al archivo correcto del html donde se encuentran los componentes globalizados
  styleUrls: ['./app.component.css']//Apuntando al archivo css donde estan los estilados de los componentes globalizados
})
export class AppComponent {
  title = 'SweetShop';
}
