import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../../../models/movie.model';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'] // ✅ Fixed
})
export class MovieListComponent implements OnInit {
  movies$: Observable<Movie[]> = this.movieService.movies$;
  query = '';
  page = 1;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.fetchMovies(this.query, this.page);
  }

  onSearch(query: string) {
    this.query = query;
    this.page = 1;
    this.movieService.fetchMovies(this.query, this.page);
  }

  onPageChange(event: PageEvent) {
    this.page = event.pageIndex + 1;
    this.movieService.fetchMovies(this.query, this.page);
  }
}
