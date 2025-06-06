import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailDialogWrapperComponent } from './movie-detail-dialog-wrapper.component';

describe('MovieDetailDialogWrapperComponent', () => {
  let component: MovieDetailDialogWrapperComponent;
  let fixture: ComponentFixture<MovieDetailDialogWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieDetailDialogWrapperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieDetailDialogWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
