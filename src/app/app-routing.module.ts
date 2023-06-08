import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found-component/not-found-component.component';

// full
// prefix
const routes: Routes = [
  {path: '', redirectTo:'home',pathMatch: 'full'},
  {path: 'login', component:LoginComponent, pathMatch:'full'},
  {path: 'home', component:HomepageComponent, pathMatch:'full'},
  {path: '**', component:NotFoundComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
