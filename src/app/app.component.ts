import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  isUser:boolean = false;
  title = 'cricle360';
  ngOnInit(): void {
    if(localStorage['user'])
    {
      this.isUser = true
    }
  }
}
