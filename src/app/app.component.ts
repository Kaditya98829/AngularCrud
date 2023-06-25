import { AfterContentInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit ,DoCheck{
  isUser:boolean = false;
  title = 'cricle360';
  constructor(private router: Router,
    private userService: UserService,
    private toast: ToastrService,
    ){
    }
  ngOnInit(): void {
    const token = document.cookie.includes('token');
    if(!!document.cookie.includes('token'))
    {
      console.log(token);
      this.isUser = true;
    }
    console.log(token);

  }
 ngDoCheck(): void {
  !!document.cookie.includes('token') ? this.isUser = true : this.isUser = false;
 }

 logout() {
 this.userService.logoutUser().subscribe(() => {
  this.toast.success('logout successfully');
  localStorage.clear();
  this.router.navigateByUrl('/home');
 })
 }

}
