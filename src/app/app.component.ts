import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BaseAngular9';
  tituloMostrado = true;
  listaNombres = [ 'Juan', 'Javier', 'Ronald', 'Juanjo', 'María'];

  buttonClicked(){
    this.tituloMostrado = !this.tituloMostrado;
  }
}
