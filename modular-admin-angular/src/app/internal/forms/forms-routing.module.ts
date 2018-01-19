import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { FormsComponent } from './forms.component';

/**
 * Router default for the component.
 *
 */
const routes: Routes = [
    {
        path: '', component: FormsComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
