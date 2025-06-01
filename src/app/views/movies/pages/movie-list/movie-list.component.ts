import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../../../models/movie.model';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  // movies$: Observable<Movie[]> = this.movieService.movies$;
  // totalResults$: Observable<number> = this.movieService.totalResults$;
  // isLoading$: Observable<boolean> = this.movieService.isLoading$;


    movies$ = this.movieService.movies$;
  totalResults$ = this.movieService.totalResults$;
  isLoading$ = this.movieService.isLoading$;
  
  currentQuery = this.movieService.currentQuery; // Expose currentQuery
  
  currentPage = 1;
  
  query = '';
  page = 1;

  constructor(public movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.fetchMovies(this.query, this.page);
  }

  // onSearch(query: string): void {
  //   this.query = query;
  //   this.page = 1;
  //   this.movieService.fetchMovies(this.query, this.page);
  // }




  clearSearch(): void {
  this.currentPage = 1;
  this.movieService.fetchMovies('', 1);
}


onSearch(query: string): void {
  this.query = query;
  this.currentPage = 1;  // reset to page 1 for new search
  this.movieService.fetchMovies(this.query, this.currentPage);
}

onPageChange(event: PageEvent): void {
  this.currentPage = event.pageIndex + 1;
  this.movieService.fetchMovies(this.query, this.currentPage);
}
}