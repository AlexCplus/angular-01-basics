import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/service.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  //@Output() newPersonaje : EventEmitter<Personaje> = new EventEmitter();

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    //this.newPersonaje.emit(this.nuevo);
    this.DbzService.agregarPersonaje(this.nuevo);
    console.log(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

  constructor(private DbzService: DbzService) {

  }
}
