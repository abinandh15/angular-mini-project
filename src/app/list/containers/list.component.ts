import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { User } from '../models/user.model';
import { Store } from '@ngrx/store';
import { selectUsers } from '../store/user.selector';
import { AppState } from '../store/app.state';
import { loadUsers, searchUser } from '../store/user.actions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  users: User[] = [{ id: '', name: '', username: '', website: '' }];
  headings = ['id', 'name', 'username', 'website'];
  sortHelper: boolean = false;
  users$ = this.store.select(selectUsers);
  searchForm = this.fb.group({
    searchQuery: ['', [Validators.required, Validators.minLength(3)]],
  });
  constructor(public fb: FormBuilder, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
    this.users$.subscribe((users) => {
      this.users = users;
    });
  }

  dropHeading(event: any) {
    moveItemInArray(this.headings, event.previousIndex, event.currentIndex);
  }

  drop(event: any) {
      moveItemInArray(this.users, event.previousIndex, event.currentIndex);
  }

  // sort table by column
  sortTable(columnId: string) {
    this.sortHelper = !this.sortHelper;
    if (this.sortHelper) {
      this.users.sort((a, b) => {
        return a[columnId] < b[columnId] ? 1 : -1;
      });
    } else {
      this.users.sort((a, b) => {
        return a[columnId] > b[columnId] ? 1 : -1;
      });
    }
  }
  search(value: any) {
    this.store.dispatch(searchUser(this.searchForm.value));
  }
}
