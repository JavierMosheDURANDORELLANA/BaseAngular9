import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valor1 = 'hola, soy valor 1';
  fecha1= new Date (2020, 0, 14);
  numero1= 10;
// 0 es enero
}
