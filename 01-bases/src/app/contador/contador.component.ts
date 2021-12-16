import { Component } from "@angular/core";

@Component({
    selector:'app-contador',
    template: `
    <h1>{{titulo}}</h1>
<h3>La base es: <strong>{{base}}</strong></h3>

<button (click)="acumular('sumar')">+ 5</button>
<button (click)="acumular('restar')">- 5</button>
    `,
})
export class ContadorComponent {

  titulo = 'Contador';
  numero = 0;
  base = 5;

  acumular(accion: string): void {
    if (accion === 'sumar') {
      this.base += 5
    } else {
      this.base -= 5
    }
    
  }
}