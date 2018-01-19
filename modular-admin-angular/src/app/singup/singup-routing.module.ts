import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingupComponent } from './singup.component';

/**
 *  Default router of this module
 */
const routes: Routes = [
  {
      path: '', component: SingupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingupRoutingModule { }
