import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemsComponent } from './items.component';
import { ItemsEditComponent } from './items-edit/items-edit.component';
import { ItemsListComponent } from './items-list/items-list.component';

/**
 * Router default for the component.
 *
 *  items/edit -> EditComponent
 *  items/list -> ListComponent
 */
const routes: Routes = [
    {path: '',    redirectTo: 'list',        pathMatch: 'full' },
    {path: 'list', component: ItemsListComponent},
    {path: 'edit', component: ItemsEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
