import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './containers/list.component';
import { ListRoutingModule } from './list-routing.module';
import { RouterModule } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TableRowComponent } from './components/table-row/table-row.component';



@NgModule({
  declarations: [
    ListComponent,
    TableRowComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    RouterModule,
    DragDropModule
  ],
  exports: [
    ListComponent
  ]
})
export class ListModule { }
