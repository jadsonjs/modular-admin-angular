import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InternalComponent } from './internal.component';
//import { DashboardComponent } from './dashboard/dashboard.component'; // not use it with lazyload

/**
 * Routes of internal module
 */
const routes: Routes = [
     /** When the app module loads the internal module, draw internal componet by default */
     { path: '', component: InternalComponent,

          /**
           *  Define the children of InternalComponent path, that is,
           *   InternalComponent path  /  Children path
           *
           *  redirectTo make a redirect in the brower, that is, the url path changes to the user
           */
          children: [
              //{ path: '', component: DashboardComponent } // without lazyload
              //{ path: '', loadChildren: './dashboard/dashboard.module#DashboardModule' } // with lazyload without redirect
              { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
              { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
              { path: 'forms', loadChildren: './forms/forms.module#FormsModule' },
              { path: 'items', loadChildren: './items/items.module#ItemsModule' }
          ]
     }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternalRoutingModule { }
