import { ToastrService } from './../toastr/toastr.service';
import { UsersService } from './../users/users.service';
import { AppUser } from './../../models/app-users/app-users';
import * as firebase from 'firebase'
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<firebase.User>
  // initializing the sigin method
  googleSignIn = new firebase.auth.GoogleAuthProvider()

  constructor(private actRoute: ActivatedRoute,
              private afAuth: AngularFireAuth,
              private router: Router,
              private userService: UsersService,
              private toaster: ToastrService) { 

                this.user$ = this.afAuth.authState
              }

  login() {
      //get the last url of the user and store it in the local storage
      let returnUrl = this.actRoute.snapshot.queryParamMap.get('returnUrl') || '/'
      localStorage.setItem('returnUrl', returnUrl)

      // use angular fire to authentiate the user with google
    this.afAuth.auth.signInWithRedirect(this.googleSignIn);
  }

  async logout() {
    if(confirm('You are logging out of your Netfilmxx account, proceed?')) {
      await this.afAuth.auth.signOut()

      this.user$.subscribe(
        user => {
          if (!user) {
            this.router.navigate(['/login'])
            this.toaster.success('logged out successfully')
          }
        }
      )
    }
  }

  get AppUser$(): Observable<AppUser> {
    return this.user$.pipe(switchMap(user => {

      if (user) return this.userService.get(user.uid).valueChanges()

      return of<AppUser>(null)
    }))
  }
}

