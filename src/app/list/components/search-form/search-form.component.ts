import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { debounceTime, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search-form',
  template: `<form [formGroup]="searchForm">
              <h3>Search by username</h3>
              <div>
                <input type="text" (keyup)="searchQuery()" formControlName="searchQuery" />
              </div>
            </form>`,
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit {
  @Input() searchForm = this.fb.group({
    searchQuery: ['', [Validators.required, Validators.minLength(3)]],
  });

  @Output() search = new EventEmitter();
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  searchQuery() {
    this.search.emit(this.searchForm.value);
  }
}
