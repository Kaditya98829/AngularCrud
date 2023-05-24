import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  public userTableData: Array<any> = [];
  public isUpdating: boolean = true                                                                 ;
  public updattedForm = {
    email:'',
    name: ''
  }
  public userId: any; 
  constructor(private userService: UserService,
    private toast : ToastrService) {}
 ngOnInit(): void {
  this.getusers();      
 }

 getusers() {
  this.userService.getUsers().subscribe((res: any) => this.userTableData = res.data);
 }
 deleteUser(id: string) {
  this.userService.deleteUser(id).subscribe(() =>{
     this.getusers();
      this.toast.success('record deleted');
    }
    ,(error:any) => this.toast.error(error.error.message));  
 }

 updateUserData() {
  this.userService.updateUser(this.userId, this.updattedForm).subscribe(() => {
    this.getusers();
    this.toast.success('Record Updated Successfully')
  }
  ,(error:any) => this.toast.error(error.error.message));
 }
}


