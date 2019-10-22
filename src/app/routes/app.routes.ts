import { FavouriteMoviesComponent } from './../dashboard/favourite-movies/favourite-movies.component';
import { LoginComponent } from './../login/login.component';
import { SearchResultsComponent } from './../search-results/search-results.component';
import { MovieDetailsPageComponent } from './../movies/movie-details-page/movie-details-page.component';
import { HomepageComponent } from './../homepage/homepage.component';
import { Routes } from '@angular/router'

export const appRoutes: Routes = [
    // route to homepage
    { path: '', component: HomepageComponent },
    { path: 'movies/search/:keyword', component: SearchResultsComponent},
    { path: 'movies/:id', component: MovieDetailsPageComponent},
    { path: 'dashboard/favourites', component: FavouriteMoviesComponent},

    { path: 'login', component: LoginComponent},
    
    // default to the base href
    { path: '', redirectTo:'/home', pathMatch: 'full'}
]