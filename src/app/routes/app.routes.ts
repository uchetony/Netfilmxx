import { SearchResultsComponent } from './../search-results/search-results.component';
import { MovieDetailsPageComponent } from './../movies/movie-details-page/movie-details-page.component';
import { HomepageComponent } from './../homepage/homepage.component';
import { Routes } from '@angular/router'

export const appRoutes: Routes = [
    // route to homepage
    { path: '', component: HomepageComponent },
    { path: 'movies/search/:keyword', component: SearchResultsComponent},
    { path: 'movies/:id', component: MovieDetailsPageComponent},
    
    // default to the base href
    { path: '', redirectTo:'/home', pathMatch: 'full'}
]