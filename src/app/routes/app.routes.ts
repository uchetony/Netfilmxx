import { HomepageComponent } from './../homepage/homepage.component';
import { Routes } from '@angular/router'

export const appRoutes: Routes = [
    // route to homepage
    { path: '', component: HomepageComponent },
    // default to the base href
    { path: '', redirectTo:'/home', pathMatch: 'full'}
]