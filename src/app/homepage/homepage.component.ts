import { ToastrService } from './../service/toastr/toastr.service';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies/movies.service';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  movies: any =[];
  constructor(private toastrService: ToastrService,
              private moviesService: MoviesService) { }

  ngOnInit() {
    // this.toastrService.success('app started')
    this.showMovies()
  }

  showMovies() {
    this.moviesService.getMovies().pipe().subscribe(
      (data: any) => {
        
        this.movies = {...data}
        this.movies = this.movies.results
        console.log(this.movies)
      }
    )
    
  }

}
