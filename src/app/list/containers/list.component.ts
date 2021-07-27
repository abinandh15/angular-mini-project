import { Component, OnDestroy, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { User } from '../models/user.model';
import { Store } from '@ngrx/store';
import { selectSearchResult, selectUsers } from '../store/user.selector';
import { AppState } from '../store/app.state';
import { loadUsers, searchUser } from '../store/user.actions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnDestroy {
  users: User[] = [{ id: '', name: '', username: '', website: '' }];
  headings = ['id', 'name', 'username', 'website'];
  sortHelper: boolean = false;
  searched: boolean = false;
  users$ = this.store.select(selectUsers);
  searchResults$ = this.store.select(selectSearchResult);
  searchForm = this.fb.group({
    searchQuery: ['', [Validators.required, Validators.minLength(3)]],
  });
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  constructor(public fb: FormBuilder, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
    this.users$.pipe(takeUntil(this.destroyed$)).subscribe((users) => {
      this.headings = Object.keys(users[0]);
      this.users = users;
    });
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
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
    this.searched = true;
    this.store.dispatch(searchUser(this.searchForm.value));
  }
  
}
