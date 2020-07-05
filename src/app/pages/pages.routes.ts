import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TurnsComponent } from './turns/turns.component';
import { ProfileComponent } from './profile/profile.component';
import { MoviesComponent } from './movies/movies.component';
import { ManagersComponent } from './managers/managers.component';
import { LogoutComponent } from './logout/logout.component';


// Guards

const pagesRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        data: { titulo: 'Dashboard' }
    },
    { path: 'movies', component: MoviesComponent, data: { titulo: 'Ajustes de Tema' } },
    { path: 'turns', component: TurnsComponent, data: { titulo: 'Ajustes de Tema' } },
    { path: 'managers', component: ManagersComponent, data: { titulo: 'Ajustes de Tema' } },
    { path: 'profile', component: ProfileComponent, data: { titulo: 'Ajustes de Tema' } },
    { path: 'logout', component: LogoutComponent, data: { titulo: 'Ajustes de Tema' } },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
