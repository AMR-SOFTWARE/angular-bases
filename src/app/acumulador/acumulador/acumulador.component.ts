import { Component } from '@angular/core';

@Component({
    selector: 'app-acumulador',
    template: `
        <h1>App acumulador</h1>
        
        <h3>La base: {{base}}</h3>

        <button (click)="acumulador(-base)">- 1</button>

        <small>{{ numero }}</small>   

        <button (click)="acumulador(base)">+ 1</button>     

    `
})
export class AcumuladorComponent {

    base: number = 5;
    numero: number = 10;


    acumulador( valor: number ): void {

        this.numero += valor*1; 

    }

}