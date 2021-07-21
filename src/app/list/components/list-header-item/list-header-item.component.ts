import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-header-item',
  templateUrl: './list-header-item.component.html',
  styleUrls: ['./list-header-item.component.scss']
})
export class ListHeaderItemComponent implements OnInit {
  @Input()
  heading: string = '';

  @Output()
  sortTable = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  sortTableEvent(heading: string){
    this.sortTable.emit(heading);
  }
}
