import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/components/components.module';

import { HeaderComponent } from './header.component';
import { CircleObjectComponent } from '../../components/circle-object/circle-object.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent
  }
];
@NgModule({
  entryComponents: [
    CircleObjectComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    CoreModule,
  ],
  declarations: [HeaderComponent],
  exports:[HeaderComponent]
})
export class HeaderModule {}
