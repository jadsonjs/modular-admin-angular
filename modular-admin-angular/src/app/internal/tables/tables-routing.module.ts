import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesStaticComponent } from './tables-static/tables-static.component';
import { TablesResponsiveComponent } from './tables-responsive/tables-responsive.component';

/**
 * Router default for the component.
 *
 *  tables/static -> EditComponent
 *  tables/responsive -> ListComponent
 */
const routes: Routes = [
    {path: '',    redirectTo: 'static',        pathMatch: 'full' },
    {path: 'static', component: TablesStaticComponent},
    {path: 'responsive', component: TablesResponsiveComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
