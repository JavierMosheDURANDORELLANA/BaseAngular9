import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  constructor() { }
  escribirPrueba(mensaje: string){
    console.log(mensaje);
  }
}

