import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsFlotComponent } from './charts-flot/charts-flot.component';
import { ChartsMorrisComponent } from './charts-morris/charts-morris.component';
import { ChartsComponent } from './charts.component';

@NgModule({
  imports: [
    CommonModule,
    ChartsRoutingModule
  ],
  declarations: [ChartsFlotComponent, ChartsMorrisComponent, ChartsComponent]
})
export class ChartsModule { }
