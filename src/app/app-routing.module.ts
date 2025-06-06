import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core-services/guards/auth/auth.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/movies/movies.module').then(m => m.MoviesModule),
    // canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./views/auth/auth.module').then(m => m.AuthModule),
  },
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
