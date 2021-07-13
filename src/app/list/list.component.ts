import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  users = [{ id: '', name:'', username: '' }]
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getUsers().subscribe(users => {
      this.users = users
    })
  }

  drop(event: CdkDragDrop<any>){
    moveItemInArray(this.users, event.previousIndex, event.currentIndex)
  }

}
