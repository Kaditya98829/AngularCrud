import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit{
   public userData = {
    newpassword:'',
    confirmpassword: ''
   }

  public resetToken: any = '';
  constructor(
    private router: Router,
    private userService: UserService,
    private toast: ToastrService
    )
    
    {
   
  };
  ngOnInit(): void {
   this.resetToken = this.router.url.split('/').find((val:string) => val.length >= 15);
 }
 resetPassword() {
  this.userService.resetPassword(this.resetToken, this.userData).subscribe(
    () => this.toast.success('Password Reset'),
    (error) => this.toast.error(error.error.message),
    () => {
      setTimeout(() => {
        this.router.navigateByUrl('/login');
      },2000)
    }
  )
 }

 viewPassword(view: any, icon: any): void {
  view.type === 'password' ? view.type = 'text' : view.type = 'password';
 }
}
