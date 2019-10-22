import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MovieCartService {

  moviesCartId = localStorage.getItem('moviesCartId')

  constructor(private db: AngularFireDatabase) { }

  private getOrCreateCartId() {
    // if there is no cart, create one and return the id to the user
    if(!this.moviesCartId) {
      this.createCart().then(
        (response) => {
          localStorage.setItem('moviesCartId',  response.key)
          return response.key
        }
      )
    } else { 
      return this.moviesCartId
    }
  }

  private createCart() {
    return this.db.list('/favourite-movies-cart').push({
      dateCreated: new Date().getTime()
    })
  }

  private updateCartState(movies, step: number) {
    // get existing movies cart id , or create one
    let updatedMoviesCartId = this.getOrCreateCartId()
    // console.log(updatedMoviesCartId)

    // create an movies node
    let item$ = this.db.object('/favourite-movies-cart/' + updatedMoviesCartId + '/items/' + movies.id)

    // set or updat the node
    item$.valueChanges().pipe(take(1)).subscribe(
      (item: any) => {
        item ? item$.remove() : item$.set(
          {
            movieName: movies.title,
            movieVotes: movies.vote_average,
            movieImage: movies.poster_path,
            movieOverview: movies.overview,
            movieDate: movies.release_date,
            state: 1
          }
        )
      }
    )
  }

  toggleFavourite(movies) {
    this.updateCartState(movies, -1)
    console.log(movies)
  }

  getMovieCart(): AngularFireObject<any[]> {

    let updatedMoviesCartId = this.getOrCreateCartId()
    // get 
    return this.db.object('/favourite-movies-cart/' + updatedMoviesCartId)
  }

  getMovie(movieId: number) {
    let updatedMoviesCartId = this.getOrCreateCartId()

    return this.db.object('/favourite-movies-cart/' + updatedMoviesCartId + '/items/' + movieId)
  }
    
}
