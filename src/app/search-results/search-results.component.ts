import { MoviesService } from 'src/app/service/movies/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  movies: any =[]
  constructor(private moviesService: MoviesService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.searchMovies()
  }

  searchMovies() {
    this.moviesService.searchMovies(this.route.snapshot.params['keyword']).subscribe(
      (data: any) => {
        this.movies = {...data}
        this.movies = this.movies.results
        console.log(this.movies)
      }
    )
  }
}
