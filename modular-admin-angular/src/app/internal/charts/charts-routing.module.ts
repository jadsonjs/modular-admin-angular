import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartsFlotComponent } from './charts-flot/charts-flot.component';
import { ChartsMorrisComponent } from './charts-morris/charts-morris.component';

/**
 * Router default for the component.
 *
 *  charts/flot -> ChartsFlotComponent
 *  charts/morris -> ChartsMorrisComponent
 */
const routes: Routes = [
    {path: '',    redirectTo: 'static',        pathMatch: 'full' },
    {path: 'flot', component: ChartsFlotComponent},
    {path: 'morris', component: ChartsMorrisComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }
