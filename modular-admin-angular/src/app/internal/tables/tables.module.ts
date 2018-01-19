import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesStaticComponent } from './tables-static/tables-static.component';
import { TablesResponsiveComponent } from './tables-responsive/tables-responsive.component';
import { TablesComponent } from './tables.component';

@NgModule({
  imports: [
    CommonModule,
    TablesRoutingModule
  ],
  declarations: [TablesStaticComponent, TablesResponsiveComponent, TablesComponent]
})
export class TablesModule { }
