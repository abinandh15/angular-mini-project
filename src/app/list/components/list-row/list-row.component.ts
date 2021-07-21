import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-list-row',
  templateUrl: './list-row.component.html',
  styleUrls: ['./list-row.component.scss'],
})
export class ListRowComponent implements OnInit {
  @Input()
  users: any;
  constructor() {}

  ngOnInit(): void {}
}
