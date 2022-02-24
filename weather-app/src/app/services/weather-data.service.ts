import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { WeatherDetailsComponent } from '../weather-details/weather-details.component';
@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  constructor(private http:HttpClient) { }
  
  getWeatherData(data:string):Observable<any>{
    return this.http.get<any>("https://api.openweathermap.org/data/2.5/weather?q="+data+"&appid=f67dbdf2473ec6dce481a056ee152f0e");
  }
}
