import { UsersService } from './service/users/users.service';
import { Router } from '@angular/router';
import { AuthService } from './service/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'netfilmxx';

  constructor(private authService: AuthService,
              private router: Router,
              private userService: UsersService) {}

  ngOnInit() {
    
    this.authService.user$.subscribe(
      user => {
        if (user) {
          // when the app is loaded,and a user is logged in, check for a return URL and get it and redirect the user there
          let returnUrl = localStorage.getItem('returnUrl')
          if (returnUrl) {
            localStorage.removeItem('returnUrl')
            this.router.navigateByUrl(returnUrl)
          }

          // anytime the user logs in, update the database with the user info
          this.userService.update(user);
        }
      }
    )

    localStorage.setItem('isFavourite', '0')
  }
}
