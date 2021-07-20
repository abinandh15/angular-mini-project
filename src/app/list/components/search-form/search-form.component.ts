import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  @Input() searchForm = this.fb.group({
    searchQuery: ['', [Validators.required, Validators.minLength(3)]]
  });

  @Output() search = new EventEmitter();
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  searchQuery(){
    this.search.emit(this.searchForm.value);
  }

}
