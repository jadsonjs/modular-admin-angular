import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

/**
 * Router default for the component.
 *
 * With the lazyload load the component, this path will be called and DashboardComponent
 * will be draw
 */
const routes: Routes = [
    {
        path: '', component: DashboardComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {
}
