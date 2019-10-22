import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {


  // OMDB API
  // defaultApiUrl = 'http://www.omdbapi.com/?apikey=7688d4ca&'
  // defaultApiUrl = 'http://www.omdbapi.com/?i[:200]&apikey=7688d4ca&page=5'

  // TMDB API
  // defaultApiUrl = 'https://api.themoviedb.org/3/movie/550?api_key=1a9717acdec299a8ddf1891e9bf27d47'
  defaultApiUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=1a9717acdec299a8ddf1891e9bf27d47&language=en-US&page=1'

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get(this.defaultApiUrl)
  }

  getMovie(movieId) {
    let movieApiUrl = 'https://api.themoviedb.org/3/movie/' + movieId + '?api_key=1a9717acdec299a8ddf1891e9bf27d47&language=en-US'
    return this.http.get(movieApiUrl)
  }

  searchMovies(searchValue) {
    
    // https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
    let searchApiUrl = 'https://api.themoviedb.org/3/search/movie?api_key=1a9717acdec299a8ddf1891e9bf27d47&language=en-US&page=1&include_adult=false&query=' + searchValue 
    return this.http.get(searchApiUrl)
  }
}
