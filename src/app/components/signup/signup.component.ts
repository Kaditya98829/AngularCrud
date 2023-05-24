import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{

  public userData = {
   name: '',
   email:'',
   password:''
  }
   constructor(
    private userService: UserService,
    private router: Router,
    private toast: ToastrService
    ) {}
ngOnInit(): void {

}
registerUser(): void {
try {
   if(!this.userData.name) {
     this.toast.info('Enter name', ' Empty field Validation');
     return;
  }
  else if(!this.userData.email) {
    this.toast.info('Enter email', 'Empty field Validation');
    return;
  }
  else if(!this.userData.password) {
    this.toast.info('Enter Password', 'Empty field Validation');
    return;
  }

  this.userService.registerUser(this.userData).subscribe(() => this.toast.success('New User Registered', 'Auth'));
  this.userData = {
    name:'', email:'', password: ''
  };

  this.router.navigateByUrl('login');
} catch (error: any) {
  this.toast.warning(error.message, 'Error')
}
}
}
