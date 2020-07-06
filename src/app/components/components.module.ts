import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { CircleObjectComponent } from './circle-object/circle-object.component';
import { ModalMovieComponent } from './modal-movie/modal-movie.component';

@NgModule({
    declarations: [
        CircleObjectComponent,
        ModalMovieComponent
    ],
    exports: [
        CircleObjectComponent,
        ModalMovieComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers:[
    ]
})
export class CoreModule { }