import { LoginComponent } from './login/login.component';
import { environment } from './../environments/environment';
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
import { FavouriteMoviesComponent } from './dashboard/favourite-movies/favourite-movies.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { SearchResultsComponent } from './search-results/search-results.component';
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabase } from 'angularfire2/database'
import { AngularFireAuth } from 'angularfire2/auth';
import { SidenavComponent } from './sidenav/sidenav.component'

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MoviesComponent,
    MovieDetailsPageComponent,
    FavouriteMoviesComponent,
    NavbarComponent,
    SearchResultsComponent,
    LoginComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
