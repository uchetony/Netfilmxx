import { appRoutes } from './routes/app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies/movies.component';
import { MovieDetailsPageComponent } from './movies/movie-details-page/movie-details-page.component';
import { LoginComponent } from './auth/login/login.component';
import { FavouriteMoviesComponent } from './dashboard/favourite-movies/favourite-movies.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { SearchResultsComponent } from './search-results/search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MoviesComponent,
    MovieDetailsPageComponent,
    LoginComponent,
    FavouriteMoviesComponent,
    NavbarComponent,
    SearchResultsComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
