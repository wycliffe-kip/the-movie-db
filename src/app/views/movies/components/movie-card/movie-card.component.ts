import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../../../models/movie.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
  @Input() movie!: Movie;
  @Output() cardClick = new EventEmitter<number>();
  isExpanded = false; 
  defaultPoster = 'assets/no-image.jpg';
 isGenresExpanded = false;
 
  genreMap: { [key: number]: string } = {
    28: 'Action', 12: 'Adventure', 16: 'Animation', 35: 'Comedy',
    80: 'Crime', 99: 'Documentary', 18: 'Drama', 10751: 'Family',
    14: 'Fantasy', 36: 'History', 27: 'Horror', 10402: 'Music',
    9648: 'Mystery', 10749: 'Romance', 878: 'Sci-Fi', 10770: 'TV Movie',
    53: 'Thriller', 10752: 'War', 37: 'Western'
  };
  

  getPosterUrl(): string {
    return this.movie.poster_path 
      ? `https://image.tmdb.org/t/p/w500${this.movie.poster_path}`
      : this.defaultPoster;
  }

  getGenreName(genreId: number): string {
    return this.genreMap[genreId] || 'Unknown';
  }

  formatDate(dateString: string): string {
    if (!dateString) return 'Unknown date';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  onCardClick(): void {
    this.cardClick.emit(this.movie.id);
  }

    toggleOverview(event: Event): void {
    event.stopPropagation(); // prevent card click from triggering
    this.isExpanded = !this.isExpanded;
  }
    toggleGenres(): void {
    this.isGenresExpanded = !this.isGenresExpanded;
  }

  getDisplayedGenres(): number[] {
    if (!this.movie?.genre_ids) return [];
    return this.isGenresExpanded ? this.movie.genre_ids : this.movie.genre_ids.slice(0, 2);
  }

  hasMoreGenres(): boolean {
    return this.movie?.genre_ids?.length > 2;
  }
}
