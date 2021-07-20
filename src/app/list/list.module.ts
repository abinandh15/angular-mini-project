import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './containers/list.component';
import { ListRoutingModule } from './list-routing.module';
import { RouterModule } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TableRowComponent } from './components/table-row/table-row.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchFormComponent } from './components/search-form/search-form.component';



@NgModule({
  declarations: [
    ListComponent,
    TableRowComponent,
    SearchFormComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    DragDropModule
  ],
  exports: [
    ListComponent
  ]
})
export class ListModule { }
