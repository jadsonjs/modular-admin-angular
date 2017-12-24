import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { EditorComponent } from './editor/editor.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListComponent, EditorComponent],
  exports:[ListComponent]
})
export class ItemsModule { }
