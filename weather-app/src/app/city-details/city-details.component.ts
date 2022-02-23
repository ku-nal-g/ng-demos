import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../services/weather-data.service';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.scss']
})
export class CityDetailsComponent implements OnInit {

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
