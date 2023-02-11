import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  private personajes : Personaje [] = [
    {
      nombre: "Goku",
      poder: 8000
    },
    {
      nombre: "Vegeta",
      poder: 2000
    }
  ];

  // JavaScript todo lo manda por referencia entonces todo se puede modificar
  // Para evitar devolverlo por referencia.
  get getPersonajes() : Personaje[] {
    return [...this.personajes];
  }

  agregarPersonaje(pj : Personaje) : void {
    this.personajes.push(pj);
  }

  constructor() {
      console.log("Servicio inicializado");
   }
}
