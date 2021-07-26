import { moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faChevronCircleDown, faChevronCircleUp, faGripVertical } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list-header-item',
  template: `<div class="list-header-item" cdkDrag cdkDragLockAxis="x">
            <p>
              <icon class="cursor-move" cdkDragHandle tooltip="drag to move column" #dragTooltip="tooltip" (mouseover)="dragTooltip.show()" (mouseout)="dragTooltip.hide()">
                <fa-icon [icon]="faGripVertical"></fa-icon>
              </icon>
              {{ heading | titlecase }}
              <icon tooltip="Click to sort" #sortTooltip="tooltip" (mouseover)="sortTooltip.show()" (mouseout)="sortTooltip.hide()" >
                <fa-icon *ngIf="sortHelper" [icon]="faCircleChevronDown" (click)="sortTableEvent(heading)"></fa-icon>
                <fa-icon *ngIf="!sortHelper" [icon]="faCircleChevronUp" (click)="sortTableEvent(heading)"></fa-icon>
              </icon>              
            </p>
          </div>`,
  styleUrls: ['./list-header-item.component.scss'],
})
export class ListHeaderItemComponent implements OnInit {
  faCircleChevronDown = faChevronCircleDown;
  faCircleChevronUp = faChevronCircleUp;
  faGripVertical = faGripVertical;
  @Input()
  heading: string = '';

  @Input()
  headings: string[] = [];

  @Input()
  sortHelper: boolean = true;

  @Output()
  sortTable = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  sortTableEvent(heading: string) {
    console.log(this.sortHelper)
    this.sortTable.emit(heading);
  }
}
