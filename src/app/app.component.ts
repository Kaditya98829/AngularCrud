import { AfterContentInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';

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
    private cookieService: CookieService
    ){
    }
  ngOnInit(): void {
    if(this.cookieService.get('token'))
    {
      this.isUser = true;
    }
    console.log(this.cookieService.get('token'));
    

  }
 ngDoCheck(): void {
  !!this.cookieService.get('token') ? this.isUser = true : this.isUser = false;
 }

 logout() {
 this.userService.logoutUser().subscribe(() => {
  this.toast.success('logout successfully');
  localStorage.clear();
  this.router.navigateByUrl('/home');
 })
 }

}
