import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/components/components.module';

import { MoviesComponent } from './movies.component';
import { ModalMovieComponent } from 'src/app/components/modal-movie/modal-movie.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesComponent
  }
];
@NgModule({
  entryComponents: [
    ModalMovieComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    CoreModule,
  ],
  declarations: [MoviesComponent],
  exports:[MoviesComponent]
})
export class MoviesModule {}
