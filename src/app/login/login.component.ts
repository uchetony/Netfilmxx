import { AuthService } from './../service/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
    ) { }

  ngOnInit() {
    
  }

login() {
  this.authService.login()
}

}
