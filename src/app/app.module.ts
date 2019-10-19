import { appRoutes } from './routes/app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies/movies.component';
import { MovieDetailsPageComponent } from './movies/movie-details-page/movie-details-page.component';
import { LoginComponent } from './auth/login/login.component';
import { FavouriteMoviesComponent } from './dashboard/favourite-movies/favourite-movies.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MoviesComponent,
    MovieDetailsPageComponent,
    LoginComponent,
    FavouriteMoviesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
