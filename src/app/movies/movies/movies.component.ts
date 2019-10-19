import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from 'src/app/service/movies/movies.service';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
@Input('movies') movies;
 

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {  
  }


}
