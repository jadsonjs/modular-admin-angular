import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemsComponent } from './items.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';

/**
 * Router default for the component.
 *
 *  items/edit -> EditComponent
 *  items/list -> ListComponent
 */
const routes: Routes = [
    {path: '', component: ItemsComponent,
        children: [
            { path: '',     redirectTo: 'list',   pathMatch: 'full'},
            { path: 'list', component: ListComponent, outlet: 'items' },
            { path: 'edit', component: EditComponent, outlet: 'items' }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
