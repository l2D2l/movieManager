
import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


// ng2-charts
import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';

import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';
import { MoviesComponent } from './movies/movies.component';
import { TurnsComponent } from './turns/turns.component';
import { ManagersComponent } from './managers/managers.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
    declarations: [
        // PagesComponent,
        DashboardComponent,
        AccoutSettingsComponent,
        MoviesComponent,
        TurnsComponent,
        ManagersComponent,
        ProfileComponent,
        LogoutComponent,
    ],
    exports: [
        DashboardComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
    ]
})
export class PagesModule { }
