import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { HeaderModule } from './header/header.module';
import { SidebarModule } from './sidebar/sidebar.module';


@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        HeaderModule,
        SidebarModule
    ],
    declarations: [
    ],
    exports: [
        HeaderModule,
        SidebarModule
    ]
})
export class SharedModule { }
