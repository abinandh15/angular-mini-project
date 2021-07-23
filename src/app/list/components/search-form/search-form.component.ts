import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  template: `<form [formGroup]="searchForm" (ngSubmit)="searchQuery()">
              <h3>Search by username</h3>
              <div>
                <input type="text" formControlName="searchQuery" />
                <button type="submit" class="search-button">Search</button>
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
