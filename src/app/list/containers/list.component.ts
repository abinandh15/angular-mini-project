import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AppService } from 'src/app/services/app.service';

export interface User {
  [id: string]: string;
  name: string;
  username: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  users: User[] = [{ id: '', name:'', username: '' }]
  headings = ['id', 'name', 'username']
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getUsers().subscribe(users => {
      this.users = users
    })
  }

  drop(event: any){
    if(this.isDragDrop(event)){
      moveItemInArray(this.users, event.previousIndex, event.currentIndex)
    }
  }
// event type error fix - https://github.com/angular/components/issues/14873
  isDragDrop(object: any): object is CdkDragDrop<string[]> {
    return 'previousIndex' in object;
  }

// sort table by column
  sortTable(columnId:string){
    this.users.sort((a, b) => {
      return a[columnId] > b[columnId] ? 1 : -1;
    })
  }
}
