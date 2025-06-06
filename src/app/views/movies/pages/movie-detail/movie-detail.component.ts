import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../../../models/movie.model';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input() movieId!: number; 

  movie?: Movie;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    if (this.movieId) {
      this.movieService.getMovieDetails(this.movieId).subscribe(data => {
        this.movie = data;
      });
    }
  }
}
