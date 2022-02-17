import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() {
    console.log("Servicio Inicializado");
  }

  getName(): string {
    return "Hey, Maggot";
  }

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
}
