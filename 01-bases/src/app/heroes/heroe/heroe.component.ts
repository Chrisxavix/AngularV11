import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})
export class HeroeComponent {
    nombre = 'IronMan';
    edad = 78;

    obtenerNombre(): string {
        return `La edad de ${this.nombre} es de ${this.edad}`;
    }

    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    cambiarNombre(): void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void {
        this.edad = 25;
    }
}

