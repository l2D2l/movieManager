import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages/pages.component';

const appRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        loadChildren: () => import('./pages/pages.module').then( m => m.PagesModule),
    },
];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
