import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [MovieListComponent, MovieCardComponent, SearchBarComponent],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatCardModule,
    RouterModule,
    // other modules
  ],
   exports: [
  ],
})
export class MoviesModule {}
