import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.scss']
})
export class DigitalClockComponent implements OnInit {

  private daysArray = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'] ;

  private date = new Date();

  public hour:any;
  public minute:string = '';
  public second:string = '';
  public ampm:any;
  public day:string = '';

  public hours:any;
  public minutes:any;
  public seconds:any;
  constructor() { }

  ngOnInit() {
    setInterval(()=>{
      const date = new Date();
      this.updateDate(date);
    },1000); // this will call update method to update details each second
    this.day = this.daysArray[this.date.getDay()];// getDay method returns days in integer value
  }

  private updateDate(date:Date){
   this.hours = date.getHours();// get the hours from date 
   this.ampm = (this.hours >= 12) ? 'PM' : 'AM';
   this.hour = this.hours % 12;
   this.hour = this.hour ? this.hour : 12;
   this.hour = this.hour < 10 ? '0' + this.hour : this.hour;

   this.minutes = date.getMinutes();
   this.minute = this.minutes < 10 ? '0' + this.minutes : this.minutes.toString();

   this.seconds = date.getSeconds();
   this.second = this.seconds < 10 ? '0' + this.seconds : this.seconds.toString();
  }

}
