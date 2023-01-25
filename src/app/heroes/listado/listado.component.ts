import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  listado : string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroeBorrado : string = '';

  borrarHeroe() : void {
    this.heroeBorrado = this.listado.shift() || '';
  }
}
