import { Component, OnInit } from '@angular/core';
import { MovieCartService } from 'src/app/service/movie-cart/movie-cart.service';

@Component({
  selector: 'favourite-movies',
  templateUrl: './favourite-movies.component.html',
  styleUrls: ['./favourite-movies.component.css']
})
export class FavouriteMoviesComponent implements OnInit {

  movieCartItems = []

  constructor(private moviesCartService: MovieCartService) { }

  ngOnInit() {
    this.moviesCartService.getMovieCart().valueChanges().pipe().subscribe(
      (cart: any) => {
        for (let movieId in cart.items) {
          this.movieCartItems.push(cart.items[movieId])
        }
      }
    )
  }
}
