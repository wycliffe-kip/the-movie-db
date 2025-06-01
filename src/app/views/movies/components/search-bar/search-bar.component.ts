import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
@Output() search = new EventEmitter<string>();

  onInput(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.search.emit(inputValue); // ✅ Emits a string
  }
}
