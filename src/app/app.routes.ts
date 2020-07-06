import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { PagesComponent } from './pages/pages.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        loadChildren: () => import('./pages/pages.module').then( m => m.PagesModule),
    },
];


// export const APP_ROUTES = RouterModule.forRoot( routes);

@NgModule({
    imports: [
      RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
