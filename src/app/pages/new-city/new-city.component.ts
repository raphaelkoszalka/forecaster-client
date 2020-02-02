import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../service/http.service';
import {AppConstants} from '../../app-constants';

@Component({
  selector: 'app-new-city',
  templateUrl: './new-city.component.html',
  styleUrls: ['./new-city.component.scss']
})
export class NewCityComponent {

  public cityName: string;

  constructor(private http: HttpService) { }

  public saveCity(city): void {
    const CITY_URL = AppConstants.OPEN_WEATHER_API_CITY_EXISTS
      .replace('{city}', city) + AppConstants.OPEN_WEATHER_API_KEY;
    this.http.get(CITY_URL).subscribe(
      res => {
        const cities = JSON.parse(localStorage.getItem('cities'));
        cities.push(city);
        localStorage.setItem('cities', JSON.stringify(cities));
      });
  }

}
