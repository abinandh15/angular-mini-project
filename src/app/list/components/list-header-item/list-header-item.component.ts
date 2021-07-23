import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-header-item',
  template: `<div class="list-header-item" (click)="sortTableEvent(heading)">
            <p tooltip="Click to sort" #myTooltip="tooltip">
              {{ heading | titlecase }}
              <span (mouseover)="myTooltip.show()" (mouseout)="myTooltip.hide()">
                (?)
              </span>
            </p>
          </div>`,
  styleUrls: ['./list-header-item.component.scss'],
})
export class ListHeaderItemComponent implements OnInit {
  @Input()
  heading: string = '';

  @Output()
  sortTable = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  sortTableEvent(heading: string) {
    this.sortTable.emit(heading);
  }
}
