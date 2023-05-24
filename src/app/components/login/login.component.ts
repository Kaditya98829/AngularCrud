import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public forgotPass = false;
 public userData = {
  email: '',
  password: ''
 }

 constructor(private userService: UserService, 
  private router: Router,
  private toast: ToastrService) {}
 loginUser() {
   try {
    if(!this.userData.email || !this.userData.password) {
      this.toast.warning('Please enter email and password', 'Validations')
    } 
    this.userService.login(this.userData).subscribe(
      (res: any) => 
                    localStorage.setItem('user', JSON.stringify(res.user)),
          (error: any) => {
          return this.toast.error(error.error.message)
              } , () => {
             this.toast.success('Login Successful')
               this.router.navigateByUrl('dashboard');
          }  
      )
             
   } catch (error: any) {
    console.log(error);
    this.toast.warning(error.message, 'error')
   }
 }

 forgotPassword() {
  this.userService.forgotPassword(this.userData.email).subscribe(() => this.toast.success('Reset Link Send to your mail'),
  (error: any) => {this.toast.error(error.error.message)}
  ,() => { setTimeout(() => {
    this.forgotPass = !this.forgotPass
    , 5000})}
  )
}
}
