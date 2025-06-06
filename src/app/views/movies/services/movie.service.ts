import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Movie } from '../../../models/movie.model';
import { environment } from '../../../../environments/environment';

interface MovieResponse {
  results: Movie[];
  total_results: number;
}

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

    this.http.get<MovieResponse>(url)
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

  fetchMoviesByCategory(category: 'popular' | 'top_rated' | 'now_playing' | 'upcoming' | 'trending', page: number = 1): void {
    this.isLoadingSubject.next(true);

    let url = '';

    if (category === 'trending') {
      url = `${this.BASE_URL}/trending/movie/day?api_key=${this.API_KEY}`;
    } else {
      url = `${this.BASE_URL}/movie/${category}?api_key=${this.API_KEY}&language=en-US&page=${page}`;
    }

    this.http.get<MovieResponse>(url)
      .pipe(
        tap(response => {
          this.moviesSubject.next(response.results);
          this.totalResultsSubject.next(response.total_results);
          this.isLoadingSubject.next(false);
        }),
        catchError(err => {
          console.error(`Failed to fetch ${category} movies:`, err);
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

  getLatestMovie(): Observable<Movie> {
    const url = `${this.BASE_URL}/movie/latest?api_key=${this.API_KEY}`;
    return this.http.get<Movie>(url);
  }

  // Optional: Keep these if used elsewhere
  getTopRatedMovies(page = 1): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(
      `${this.BASE_URL}/movie/top_rated?api_key=${this.API_KEY}&language=en-US&page=${page}`
    );
  }

  getTrendingMovies(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(
      `${this.BASE_URL}/trending/movie/day?api_key=${this.API_KEY}`
    );
  }

  getUpcomingMovies(page = 1): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(
      `${this.BASE_URL}/movie/upcoming?api_key=${this.API_KEY}&language=en-US&page=${page}`
    );
  }
}
