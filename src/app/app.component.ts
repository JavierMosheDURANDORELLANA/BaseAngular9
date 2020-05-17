import { Component } from '@angular/core';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Next U - Aprendiendo Angular';
  nombreUsuario = 'Javier Durand';
  edadUsuario = '30';
  persona = {
    nombre : 'Jose',
    edad : 25
  }
  titleClicked(){
    alert('Se ha disparado un evento click');
  }

}
