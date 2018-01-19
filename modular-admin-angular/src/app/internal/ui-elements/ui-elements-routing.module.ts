import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonsComponent }    from './buttons/buttons.component';
import { CardsComponent }      from './cards/cards.component';
import { GridComponent }       from './grid/grid.component';
import { IconsComponent }      from './icons/icons.component';
import { TypographyComponent } from './typography/typography.component';

/**
 * Router default for the component.
 *
 *  ui-elements/buttons -> ButtonsComponens
 *
 */
const routes: Routes = [
    {path: '',    redirectTo: 'buttons',        pathMatch: 'full' },
    {path: 'buttons',    component: ButtonsComponent},
    {path: 'cards',      component: CardsComponent},
    {path: 'grid',       component: GridComponent},
    {path: 'icons',      component: IconsComponent},
    {path: 'typography', component: TypographyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiElementsRoutingModule { }
