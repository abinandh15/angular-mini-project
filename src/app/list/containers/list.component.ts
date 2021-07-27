import { Component, OnInit } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import { User } from '../models/user.model';
import { Store } from '@ngrx/store';
import { selectSearchResult, selectUsers } from '../store/user.selector';
import { AppState } from '../store/app.state';
import { loadUsers, searchUser, sortUsers, updateUsers } from '../store/user.actions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit{
  users: User[] = [{ id: '', name: '', username: '', website: '' }];
  headings = ['id', 'name', 'username', 'website'];
  sortHelper: boolean = false;
  searched: boolean = false;
  users$ = this.store.select(selectUsers);
  searchResults$ = this.store.select(selectSearchResult);
  searchForm = this.fb.group({
    searchQuery: ['', [Validators.required, Validators.minLength(3)]],
  });
  constructor(public fb: FormBuilder, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
  }

  dropHeading(event: any) {
    moveItemInArray(this.headings, event.previousIndex, event.currentIndex);
  }

  drop(event: any) {
      this.store.dispatch(updateUsers({previousIndex: event.previousIndex, currentIndex: event.currentIndex}))
  }

  // sort table by column
  sortTable(columnId: string) {
    this.sortHelper = !this.sortHelper;
    this.store.dispatch(sortUsers({columnId, sortHelper: this.sortHelper}))
  }
  search(value: any) {
    this.searched = true;
    this.store.dispatch(searchUser(this.searchForm.value));
  }
  
}
