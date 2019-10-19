import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MoviesService } from '../service/movies/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }


  searchMovies(searchValue) {
    console.log(searchValue)
    // this.moviesService.searchMovies(searchValue)
  }
}
