import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/service.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  get personajes() {
    return this.DbzService.getPersonajes;
  }

  constructor(private DbzService: DbzService) {

  }
}
