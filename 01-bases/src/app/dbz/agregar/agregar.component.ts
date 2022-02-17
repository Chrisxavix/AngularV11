import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  @Input('nuevo') nuevo: Personaje = { nombre: '', poder: 0 };
  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(): void {

    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    this.onNuevoPersonaje.emit(this.nuevo);
    this.nuevo = {
      nombre: "",
      poder: 0,
    }
    console.log(this.nuevo, 'nuevo');
  }
}
