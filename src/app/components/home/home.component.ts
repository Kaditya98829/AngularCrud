import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  public day: string | undefined;
  public minute: string | any;
  public year : number | undefined;
  public hour: number | undefined;
ngOnInit(): void {
  let days=["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
  let time= new Date(); 
  this.hour= time.getHours();
  let minutes=time.getMinutes();
  this.day = days[time.getDay()];
  this.year = time.getFullYear();
  console.log(minutes)
  minutes < 10 ? this.minute = '0'+ minutes : this.minute = minutes;

}

}
