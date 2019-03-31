import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './common/auth/login.component';
import { SignUpComponent } from './common/auth/sign-up.component'; //HOMEWORK Session 2

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent }, //HOMEWORK Session 2
  { path: '**', component: HomeComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(appRoutes)],
})
export class AppRoutingModule {}
