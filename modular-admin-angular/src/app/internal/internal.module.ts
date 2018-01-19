import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { InternalRoutingModule } from './internal-routing.module';
import { InternalComponent } from './internal.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  /*  makes the exported declarations of other modules available in the current module
   *  The RoutingModule of the module needs to be imported also
   */
  imports: [
    CommonModule,
    InternalRoutingModule,
    DashboardModule
  ],
  /* makes the components, directives, and pipes available in modules that import this module */
  exports: [],

  /** directives from the current module  available in HTML */
  declarations: [InternalComponent, HeaderComponent, FooterComponent, SidebarComponent]
})
export class InternalModule { }
