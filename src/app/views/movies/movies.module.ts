import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { MoviesRoutingModule } from './movies-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MovieListComponent, MovieCardComponent, SearchBarComponent],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatCardModule,
    RouterModule,
    SharedModule,
    MoviesRoutingModule,
    MatIconModule,
    MatButtonModule,
MatChipsModule, 
 MatProgressSpinnerModule,
  MatFormFieldModule,
    MatInputModule,
    FormsModule

    // other modules
  ],
   exports: [
  ],
})
export class MoviesModule {}
