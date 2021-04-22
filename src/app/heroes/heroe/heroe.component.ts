import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})
export class HeroeComponent {

    nombre: String = 'Ironman';
    edad: number = 40;

    obtenerInfo(): string {

        return `${ this.nombre } - ${ this.edad }`;

    }

    get nombreCapitalizado(): string {

        return  this.nombre.toUpperCase();

    }

    cambiarNombre(): void {

        this.nombre = 'Spiderman';

    }

    cambiarEdad() {

        this.edad = 30;

    }

}