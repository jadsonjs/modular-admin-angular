import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components of application */
import { HomeComponent }   from './home/home.component';
import { FormsComponent }  from './forms/forms.component';
import { EditorComponent } from './items/editor/editor.component';
import { ListComponent }   from './items/list/list.component';

const routes: Routes = [
     { path: '',          component: HomeComponent},
     { path: 'forms',     component: FormsComponent},
     { path: 'itemsList',     component: ListComponent},
     { path: 'itemsEditor',     component: EditorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
