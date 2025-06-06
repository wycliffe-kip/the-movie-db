export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  vote_average: number;
  release_date: string;
  genre_ids: number[];
  original_title: string;

}

export interface User {
  id: number;
  username: string;
  email: string;
  token: string;
  // add other personalization fields as needed
}