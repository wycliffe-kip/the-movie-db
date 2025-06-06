import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../../../firebase.init';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
   styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: any;

  constructor(private route: ActivatedRoute) {}

  async ngOnInit() {
    const movieId = this.route.snapshot.paramMap.get('id');
    if (movieId) {
      const docRef = doc(db, 'movies', movieId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        this.movie = docSnap.data();
      }
    }
  }
}
