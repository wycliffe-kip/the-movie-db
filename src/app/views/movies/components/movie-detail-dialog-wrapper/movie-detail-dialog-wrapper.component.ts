import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-detail-dialog-wrapper',
  template: `<app-movie-detail [movieId]="movieId"></app-movie-detail>`,
})
export class MovieDetailDialogWrapperComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public movieId: number) {}
}
