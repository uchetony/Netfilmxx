import { AppUser } from './../../models/app-users/app-users';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private db: AngularFireDatabase) { }

  // update details of a  user to the database

  update(user: firebase.User) {
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email,
      isUser: true
    })
  }

  // get a particular user from the database
  get(uid: string): AngularFireObject<AppUser> {
    return this.db.object('/users/' + uid)
  }
}
