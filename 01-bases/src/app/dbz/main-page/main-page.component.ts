import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent implements OnInit {

  constructor(
    private dbzService: DbzService,
  ) { }

  /* personajes: Personaje[] = []; */

  nuevo: Personaje = {
    nombre: '',
    poder: 0,
  }

  get personajes(): Personaje[] {
    return this.dbzService.personajes;
  }

  agregarNuevoPersonaje(getPerson: Personaje): void {
    this.personajes.push(getPerson);
    console.log(this.personajes, "listadoPersonajes");
  }

  ngOnInit() {
    console.log(this.dbzService.getName(), 'dbzService');
  }

}
