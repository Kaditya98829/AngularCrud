import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo:'home'},
  {
  path: 'home', component: HomeComponent
}, {
  path: 'register', component: SignupComponent
}, 
{path:'login', component: LoginComponent},
{path:'dashboard',canActivate: [AuthGuard],component: DashboardComponent},
{path:'reset/password/:id', pathMatch:'full', component: ResetpasswordComponent} ,
{path: '**', pathMatch: 'full', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
