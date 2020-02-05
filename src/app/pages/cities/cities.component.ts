import { Component, OnInit } from '@angular/core';
import {AppConstants} from "../../app-constants";
import {HttpService} from "../../service/http.service";

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent {

  public cities: [];
  // no inferable type
  public isLoading = false;
  public cityName: string;
  public weather: object;
  public selectedCity: string;

  constructor(private http: HttpService) {
    this.cities = JSON.parse(localStorage.getItem('cities'));
    console.log(this.cities);
  }

  public cityHasBeenSelected(city, event) {
      this.isLoading = true;
      const CITY_URL = AppConstants.OPEN_WEATHER_API_CITY_EXISTS
        .replace('{city}',  city) + AppConstants.OPEN_WEATHER_API_KEY;
      this.http.get(CITY_URL).subscribe(res => {
        this.getSelectedCityWeather(res['coord']['lat'], res['coord']['lon']);
      });
  }

  // move duplicate method to father class
  private getSelectedCityWeather(lat: number, lng: number): void {
    this.isLoading = true;
    const WEATHER_URL = AppConstants.OPEN_WEATHER_API
      .replace('{lat}', lat.toString())
      .replace('{lon}', lng.toString())
      .replace('{cnt}', AppConstants.OPEN_WEATHER_API_NUMBER_OF_DAYS.toString()) + AppConstants.OPEN_WEATHER_API_KEY;
    this.http.get(WEATHER_URL).subscribe(weather => {
      this.weather = weather;
      console.log(this.weather);
      this.isLoading = false;
    });
  }
}
