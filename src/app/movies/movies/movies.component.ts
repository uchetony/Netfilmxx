import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from 'src/app/service/movies/movies.service';
import { MovieCartService } from 'src/app/service/movie-cart/movie-cart.service';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
@Input('movies') movies;
// cart= [];
movie={};
movieCartItems =[];
likeState = localStorage.getItem('isFavourite')

  constructor(private moviesService: MoviesService,
              private moviesCartService: MovieCartService) { }

  ngOnInit() {  
   this.getMovies()
   
  }
  getMovies() {
    this.moviesCartService.getMovieCart().valueChanges().pipe(take(1)).subscribe(
      (cart: any) => {
        let movieId = this.movies.id
        // console.log(cart.items)
        // console.log(cart.items.movieId)
      }
    )
  }

  toggleLike() {
    if(this.likeState === '0') {
      localStorage.setItem('isFavourite', '1')
    }
    if(this.likeState === '1') {
      localStorage.setItem('isFavourite', '0')
    }

  }
  toggleFavourite() {
    this.moviesCartService.toggleFavourite(this.movies)
    this.toggleLike()
  }
}
