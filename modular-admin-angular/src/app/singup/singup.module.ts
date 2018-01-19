import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingupRoutingModule } from './singup-routing.module';
import { SingupComponent } from './singup.component';

@NgModule({
  imports: [
    CommonModule,
    SingupRoutingModule
  ],
  declarations: [SingupComponent]
})
export class SingupModule { }
