import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';

const routes: Routes = [{
  path: '', component: HomeComponent
}, {
  path: 'register', component: SignupComponent
}, 
{path:'login', component: LoginComponent},
{path:'dashboard',canActivate: [AuthGuard],component: DashboardComponent},
{path:'reset/password/:id', pathMatch:'full', component: ResetpasswordComponent} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
