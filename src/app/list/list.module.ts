import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './containers/list.component';
import { ListRoutingModule } from './list-routing.module';
import { RouterModule } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { TooltipDirective } from './directives/tooltip.directive';
import { ListHeaderItemComponent } from './components/list-header-item/list-header-item.component';
import { ListRowComponent } from './components/list-row/list-row.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    ListComponent,
    SearchFormComponent,
    TooltipDirective,
    ListHeaderItemComponent,
    ListRowComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    DragDropModule,
    FontAwesomeModule
  ],
  exports: [ListComponent],
})
export class ListModule {}
