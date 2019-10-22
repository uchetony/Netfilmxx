<<<<<<< HEAD
# Netfilmxx

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.12.
The backend of this app was built with firebase.
The movies are gotten from a REST API https://www.themoviedb.org/ , make sure to go through heir documentation.
You need to install firebase-tools, firebase and angularfire

## Setting up firebase
Run npm install -g firebase-tools
Run firebase login and login with your credentials
Run firebase init and set up firebase how you want.

## interacting with firebase from the app
Run npm install --save firebase angularfire2
Visit console.firebase.google.com and get the config and paste as a 'firebase' object in your enviroemnent.ts and enviroemnent.prod.ts
In app.module.ts import AngulaFireModule, AngularFireAuth and AngularFireDatabase.
In imports array, add AngulaFireModule.initializeApp(environment.firebase)
In providers array add AngularFireAuth and AngularFireDatabase

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build --prod` to build the app for production. The build artifacts will be stored in the `dist/netflimxx` directory. 

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
=======
# Netfilmxx
>>>>>>> aaec2decf806e139409284c9e64967f6a5978217
