import { Component, OnInit } from '@angular/core';
import {AppConstants} from '../../app-constants';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpService} from "../../service/http.service";

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})

export class CitiesComponent implements OnInit {

  public cities: object[];
  // no inferable type
  public isLoading = false;
  public city: object;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpService) {
    this.cities = route['data']['_value']['cities'];
  }

  ngOnInit(): void {
    this.cityHasBeenSelected(this.cities[0]);
  }

  public cityHasBeenSelected(city) {
    const CITY_URL = AppConstants.OPEN_WEATHER_API_CITY_EXISTS
      .replace('{city}',  city['city']) + AppConstants.OPEN_WEATHER_API_KEY;
    console.log(CITY_URL);
    this.getSelectedCityWeather(city['lat'], city['lng']);
  }

  private getSelectedCityWeather(lat: number, lng: number): void {
    this.isLoading = true;
    const WEATHER_URL = AppConstants.OPEN_WEATHER_API
      .replace('{lat}', lat.toString())
      .replace('{lon}', lng.toString())
      .replace('{cnt}', AppConstants.OPEN_WEATHER_API_NUMBER_OF_DAYS.toString()) + AppConstants.OPEN_WEATHER_API_KEY;
    this.http.get(WEATHER_URL).subscribe(city => {
      this.city = city;
      this.isLoading = false;
    });
  }

  public deleteCity(city): void {
    this.http.delete(AppConstants.SERVER_API_DELETE.replace('{city}', city['city'])).subscribe(res => {
      console.log(res);
      alert('City deleted');
      window.location.reload();
    });
  }

}
