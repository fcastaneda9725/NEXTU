import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valor1 = 'Hola soy un mensaje';
  fecha1 = new Date (2016, 10, 20);
  numero1 = 20;
}
