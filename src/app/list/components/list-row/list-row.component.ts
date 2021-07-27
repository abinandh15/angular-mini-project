import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-list-row',
  template: `<div
              class="list-row cursor-move"
              cdkDragLockAxis="y"
              cdkDrag
              *ngFor="let user of users"
            >
                <div *ngFor="let heading of headings">{{user?user[heading]:''}}</div>
            </div>`,
  styleUrls: ['./list-row.component.scss'],
})
export class ListRowComponent implements OnInit {
  @Input()
  users: any;
  @Input()
  headings: string[] = [];
  constructor() {}

  ngOnInit(): void {}
}
