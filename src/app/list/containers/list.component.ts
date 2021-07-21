import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { User } from '../models/user.model';
import { Store } from '@ngrx/store';
import { selectUsers } from '../store/user.selector';
import { AppState } from '../store/app.state';
import { loadUsers, searchUser } from '../store/user.actions';
import { AppService } from '../services/app.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  users: User[] = [{ id: '', name:'', username: '', website: '' }]
  headings = ['id', 'name', 'username', 'website']
  sortHelper = 1;
  users$ = this.store.select(selectUsers);
  searchForm = this.fb.group({
    searchQuery: ['', [Validators.required, Validators.minLength(3)]]
  });
  constructor(public fb: FormBuilder, private store: Store<AppState>) { }

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
    if(this.sortHelper == +this.users[0].id){
      this.users.sort((a, b) => {
        return a[columnId] < b[columnId] ? 1 : -1;
      })
    }else{
      this.users.sort((a, b) => {
        return a[columnId] > b[columnId] ? 1 : -1;
      })
      this.sortHelper = +this.users[0].id;
    }    
  }
  search(value:any){
   this.store.dispatch(searchUser(this.searchForm.value));
   console.log(this.users.filter(user => user.username.toLowerCase().includes(this.searchForm.value.searchQuery.toLowerCase())));
  }
}
