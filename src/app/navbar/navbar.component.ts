import { AuthService } from './../service/auth/auth.service';
import { AppUser } from './../models/app-users/app-users';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MoviesService } from '../service/movies/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  appUser: AppUser
  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    this.authService.AppUser$.subscribe(
      appUser => this.appUser = appUser
    )
  }

  logout() {
    this.authService.logout()
  }


  searchMovies(searchValue) {
    console.log(searchValue)
    // this.moviesService.searchMovies(searchValue)
  }
}
