import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TurnsComponent } from './turns/turns.component';
import { ProfileComponent } from './profile/profile.component';
import { MoviesComponent } from './movies/movies.component';
import { ManagersComponent } from './managers/managers.component';
import { LogoutComponent } from './logout/logout.component';
import { NgModule } from '@angular/core';



const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    { path: 'movies', component: MoviesComponent},
    { path: 'turns', component: TurnsComponent},
    { path: 'managers', component: ManagersComponent},
    { path: 'profile', component: ProfileComponent},
    { path: 'logout', component: LogoutComponent},
];


// export const PAGES_ROUTES = RouterModule.forChild( routes );
@NgModule({
    imports: [
      RouterModule.forChild(routes) 
    ],
    exports: [RouterModule]
  })
  export class PagesRoutingModule {}