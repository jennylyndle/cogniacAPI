import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogInComponent } from './components/log-in/log-in.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuard } from './guards/auth-guard';


const routes: Routes = [
  { path: 'login', component: LogInComponent },
  { path: '', redirectTo:'login',pathMatch:'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '*', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }