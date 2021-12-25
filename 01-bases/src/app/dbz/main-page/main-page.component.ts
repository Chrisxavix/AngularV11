import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      nombre: 'Killer01',
      poder: 78
    },
    {
      nombre: 'Vision01',
      poder: 54
    }
  ];

  nuevo: Personaje = {
    nombre: '',
    poder: 0,
  }

}
