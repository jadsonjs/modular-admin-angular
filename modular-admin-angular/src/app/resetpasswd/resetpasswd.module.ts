import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetpasswdRoutingModule } from './resetpasswd-routing.module';
import { ResetpasswdComponent } from './resetpasswd.component';

@NgModule({
  imports: [
    CommonModule,
    ResetpasswdRoutingModule
  ],
  declarations: [ResetpasswdComponent]
})
export class ResetpasswdModule { }
