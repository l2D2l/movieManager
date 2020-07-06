import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CoreModule } from '../components/components.module';


@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        CoreModule
    ],
    declarations: [
        HeaderComponent,
        SidebarComponent
    ],
    exports: [
        HeaderComponent,
        SidebarComponent
    ]
})
export class SharedModule { }
