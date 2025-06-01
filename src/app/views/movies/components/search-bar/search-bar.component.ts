import { Component, EventEmitter, Output, OnInit, OnDestroy, Input } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit, OnDestroy {
  @Output() search = new EventEmitter<string>();
  @Input() isLoading = false;  // Receive loading state from parent

  searchQuery = '';
  private searchSubject = new Subject<string>();
  private subscription!: Subscription;

  ngOnInit() {
    this.subscription = this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(value => {
      // Emit trimmed value, empty string for clearing search
      this.search.emit(value.trim());
    });
  }

  onInput() {
    this.searchSubject.next(this.searchQuery);
  }

  onSearchClick() {
    if (this.searchQuery.trim()) {
      this.search.emit(this.searchQuery.trim());
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
