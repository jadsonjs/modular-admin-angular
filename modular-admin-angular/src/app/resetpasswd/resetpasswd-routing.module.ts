import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResetpasswdComponent } from './resetpasswd.component';

/**
 *  Default router of this module
 */
const routes: Routes = [
    {
        path: '', component: ResetpasswdComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResetpasswdRoutingModule { }
