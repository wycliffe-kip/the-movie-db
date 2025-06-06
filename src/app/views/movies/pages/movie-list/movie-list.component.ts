import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../../../models/movie.model';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies$ = this.movieService.movies$;
  totalResults$ = this.movieService.totalResults$;
  isLoading$ = this.movieService.isLoading$;

  currentQuery = this.movieService.currentQuery;
  currentPage = 1;
  query = '';
  page = 1;

  heroBackgroundUrl: string | null = null;

  constructor(public movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.movies$.subscribe(movies => {
      const firstMovie = movies[0];
      if (firstMovie?.backdrop_path) {
        this.heroBackgroundUrl = `https://image.tmdb.org/t/p/original${firstMovie.backdrop_path}`;
      } else {
        this.heroBackgroundUrl = null;
      }
    });

    this.movieService.fetchMovies(this.query, this.page);
  }

  onSearch(query: string): void {
    this.query = query;
    this.currentPage = 1;
    this.movieService.fetchMovies(this.query, this.currentPage);
  }

  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex + 1;
    this.movieService.fetchMovies(this.query, this.currentPage);
  }

  clearSearch(): void {
    this.currentPage = 1;
    this.movieService.fetchMovies('', 1);
  }
}
