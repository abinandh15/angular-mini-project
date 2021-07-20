import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AppService } from 'src/app/services/app.service';
import { User } from '../models/user.model';
import { Store } from '@ngrx/store';
import { selectUsers } from '../store/user.selector';
import { AppState } from '../store/app.state';
import { loadUsers } from '../store/user.actions';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  users: User[] = [{ id: '', name:'', username: '' }]
  headings = ['id', 'name', 'username']
  users$ = this.store.select(selectUsers)
  constructor(private appService: AppService, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
    this.users$.subscribe(users => {
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
