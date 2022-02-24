import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../services/weather-data.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {

 
  weatherInfo?: any;

  isClicked: boolean = false;

  cityName: string = '';

  btnClicked(item: string) {
    if (item.trim().length > 0) {
      this.isClicked = true;
      this.weatherArray.getWeatherData(this.cityName).subscribe(data => {
        console.log(data);
        this.weatherInfo = data;
      }, reject => {
        console.log(reject)
      });
    }
    else {
      alert("Please enter a City Name");
    }
  }

  constructor(private weatherArray: WeatherDataService) {


  }
  ngOnInit(): void {

  }
}
