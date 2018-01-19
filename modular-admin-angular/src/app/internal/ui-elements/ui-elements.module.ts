import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiElementsRoutingModule } from './ui-elements-routing.module';
import { UiElementsComponent } from './ui-elements.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { GridComponent } from './grid/grid.component';

@NgModule({
  imports: [
    CommonModule,
    UiElementsRoutingModule
  ],
  declarations: [UiElementsComponent, ButtonsComponent, CardsComponent, TypographyComponent, IconsComponent, GridComponent]
})
export class UiElementsModule { }
