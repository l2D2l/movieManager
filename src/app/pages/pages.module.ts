
import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages.routes';
import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';

import { MoviesComponent } from './movies/movies.component';
import { TurnsComponent } from './turns/turns.component';
import { ManagersComponent } from './managers/managers.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
    declarations: [
        DashboardComponent,
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
        PagesRoutingModule,
        FormsModule,
        IonicModule,
    ]
})
export class PagesModule { }
