import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { LoginComponent } from '../auth/pages/login/login.component';
import { RegisterComponent } from '../auth/pages/register/register.component';
import { AuthGuard } from '../../core-services/guards/auth/auth.guard';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';

const routes: Routes = [
  {
    path: '',
    component: MovieListComponent
  },
  {
  path: 'movie/:id',
  component: MovieDetailComponent,
  canActivate: [AuthGuard]  
},
   {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'register',
      component: RegisterComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {}
