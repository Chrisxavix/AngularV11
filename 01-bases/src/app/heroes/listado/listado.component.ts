import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Rocket'];
  heroesBorrados: string[] = [];

  borrarHeroe(): void {
    if (this.heroes.length > 0) {
      const heroeBorrado = this.heroes.shift();   
      /* const heroeBorrado = this.heroes.shift() || ''; */
      if ( typeof heroeBorrado === "string") {
        this.heroesBorrados.push(heroeBorrado);
      }
    } else {
      alert("Listado Vacío")
    }
  }
}
