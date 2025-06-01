import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent implements OnInit {
  movie$ = this.route.paramMap.pipe(
    switchMap(params => this.movieService.getMovieDetails(+params.get('id')!))
  );
ngOnInit(): void {
  
}
  constructor(private route: ActivatedRoute, private movieService: MovieService) {}
}