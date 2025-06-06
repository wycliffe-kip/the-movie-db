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
import { PageLayoutComponent } from './pages/page-layout/page-layout.component';
import { NavigationComponent } from './pages/navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './pages/footer/footer.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailDialogWrapperComponent } from './components/movie-detail-dialog-wrapper/movie-detail-dialog-wrapper.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
@NgModule({
  declarations: [MovieListComponent, MovieCardComponent, 
    SearchBarComponent, PageLayoutComponent, NavigationComponent, 
    FooterComponent,MovieDetailComponent,
    MovieDetailDialogWrapperComponent, 
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatCardModule,
    RouterModule,
    SharedModule,
    MoviesRoutingModule,
    MatButtonToggleModule,
    MatIconModule,
    MatButtonModule,
MatChipsModule, 
 MatProgressSpinnerModule,
  MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatToolbarModule,
     MatDialogModule,
    HttpClientModule,
  ],
   exports: [ MovieDetailComponent
  ],
})
export class MoviesModule {}
