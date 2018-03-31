import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  tituloMostrado = true;
  listaNombres = ['Paco', 'Juan', 'Luis', 'Chuchito', 'Pedro', 'Montse'];

  buttonClicked() {
    this.tituloMostrado = !this.tituloMostrado;
  }
}
