import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MovieDetailDialogWrapperComponent } from '../../components/movie-detail-dialog-wrapper/movie-detail-dialog-wrapper.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies$ = this.movieService.movies$;
  totalResults$ = this.movieService.totalResults$;
  isLoading$ = this.movieService.isLoading$;

  currentPage = 1;
  query = '';
  heroBackgroundUrl = '';

  constructor(
    public movieService: MovieService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.movieService.fetchMovies(this.query, this.currentPage);
    this.movies$.subscribe(movies => {
      if (movies.length) {
        this.heroBackgroundUrl = 'https://image.tmdb.org/t/p/original' + movies[0].backdrop_path;
      }
    });
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

  openMovieDetail(movieId: number): void {
    this.dialog.open(MovieDetailDialogWrapperComponent, {
      width: '70%',
      data: movieId,
      panelClass: 'custom-dialog-panel', 
    maxHeight: '90vh', 
    autoFocus: false
    });
  }
}
