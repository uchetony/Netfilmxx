import { MoviesService } from './../../service/movies/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'movie-details-page',
  templateUrl: './movie-details-page.component.html',
  styleUrls: ['./movie-details-page.component.css']
})
export class MovieDetailsPageComponent implements OnInit {
  movie: any =[]
  constructor(private moviesService: MoviesService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getMovie()
  }

  getMovie() {
    this.moviesService.getMovie(+this.route.snapshot.params['id']).pipe().subscribe(
      (data: any) => {
        this.movie = {...data}
        console.log(this.movie)
      }
    )
  }

}
