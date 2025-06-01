import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Movie } from '../../../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

 private moviesSubject = new BehaviorSubject<Movie[]>([]);
  movies$ = this.moviesSubject.asObservable();

  constructor(private http: HttpClient) {}

  fetchMovies(query: string, page: number): void {
    const url = query
      ? `https://api.themoviedb.org/3/search/movie?query=${query}&page=${page}&api_key=YOUR_API_KEY`
      : `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=YOUR_API_KEY`;

    this.http.get<{ results: Movie[] }>(url).subscribe(res => this.moviesSubject.next(res.results));
  }

  getMovieDetails(id: number): Observable<Movie> {
    return this.http.get<Movie>(`https://api.themoviedb.org/3/movie/${id}?api_key=YOUR_API_KEY`);
  }
}