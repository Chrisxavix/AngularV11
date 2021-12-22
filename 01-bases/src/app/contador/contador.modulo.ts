import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    declarations: [
        ContadorComponent,
    ],
    exports: [
        ContadorComponent
    ],
    imports: [
        /* Módulo que sirve para las directivas ngIf, ngFor, etc */
        CommonModule,
    ]
})
export class ContadorModule {
    
}