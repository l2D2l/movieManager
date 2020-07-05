import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';
import { CircleObjectComponent } from '../components/circle-object/circle-object.component';


@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        // CircleObjectComponent
    ],
    declarations: [
        NopagefoundComponent,
        HeaderComponent,
        SidebarComponent,
        NopagefoundComponent,
        ModalUploadComponent,
        CircleObjectComponent
    ],
    exports: [
        NopagefoundComponent,
        HeaderComponent,
        SidebarComponent,
        NopagefoundComponent,
        ModalUploadComponent,
        // CircleObjectComponent
    ]
})
export class SharedModule { }
