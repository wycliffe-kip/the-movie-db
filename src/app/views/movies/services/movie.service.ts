import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Movie } from '../../../models/movie.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private moviesSubject = new BehaviorSubject<Movie[]>([]);
  private totalResultsSubject = new BehaviorSubject<number>(0);
  private isLoadingSubject = new BehaviorSubject<boolean>(false);

  movies$ = this.moviesSubject.asObservable();
  totalResults$ = this.totalResultsSubject.asObservable();
  isLoading$ = this.isLoadingSubject.asObservable();
  currentQuery: string = '';

  private readonly API_KEY = environment.tmdbApiKey;
  private readonly BASE_URL = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

fetchMovies(query: string = '', page: number = 1): void {
  this.isLoadingSubject.next(true);
  this.currentQuery = query;

  const url = query
    ? `${this.BASE_URL}/search/movie?query=${encodeURIComponent(query)}&page=${page}&api_key=${this.API_KEY}`
    : `${this.BASE_URL}/movie/popular?page=${page}&api_key=${this.API_KEY}`;

  this.http.get<{ results: Movie[]; total_results: number }>(url)
    .pipe(
      tap(response => {
        this.moviesSubject.next(response.results);
        this.totalResultsSubject.next(response.total_results);
        this.isLoadingSubject.next(false);
      }),
      catchError(err => {
        console.error('Failed to fetch movies:', err);
        this.moviesSubject.next([]);
        this.totalResultsSubject.next(0);
        this.isLoadingSubject.next(false);
        return of(null);
      })
    )
    .subscribe();
}


  getMovieDetails(id: number): Observable<Movie> {
    const url = `${this.BASE_URL}/movie/${id}?api_key=${this.API_KEY}&append_to_response=credits`;
    return this.http.get<Movie>(url);
  }
}