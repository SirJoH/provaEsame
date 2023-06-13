import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found-component/not-found-component.component';
import { AuthGuard } from './guards/auth-guard.guard';
import { DetailsComponent } from './components/details/details.component';
import { ListingComponent } from './components/listing/listing.component';
import { FavoritesComponent } from './components/favorites/favorites.component';

// full
// prefix
const routes: Routes = [
  {path: '', redirectTo:'home',pathMatch: 'full'},
  {path: 'login', component:LoginComponent, pathMatch:'full'},
  {path: 'home', component:HomepageComponent, pathMatch:'full',canActivate:[AuthGuard]},
  {path: 'profiles', component:ListingComponent, pathMatch:'full',canActivate:[AuthGuard]},
  {path: 'details', component:DetailsComponent, pathMatch:'full',canActivate:[AuthGuard]},
  {path: 'favorites', component:FavoritesComponent, pathMatch:'full',canActivate:[AuthGuard]},

  {path: '**', component:NotFoundComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
