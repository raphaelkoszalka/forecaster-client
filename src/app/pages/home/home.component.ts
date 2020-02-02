import { Component, OnInit } from '@angular/core';
import {GeolocationService} from '../../service/geolocation.service';
import {HttpServiceService} from '../../service/http-service.service';
import {AppConstants} from '../../app-constants';

@Component({
  selector: 'app-main-card',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  private lng: number;
  private lat: number;
  public cityName: string;
  // no inferable types
  public isLoading = true;
  public weather: object;

  // IMPORTANT NOTE:

  // I chose to not use a Resolver on HomeComponent because the end user
  // might not allow browser to use it's Geolocation API and then it would not instantiate the component
  // I know that I can write a simple business rule to avoid that, it's just a matter of the little time frame
  // to develop the whole test.

  constructor(private geolocation: GeolocationService, private http: HttpServiceService) {
    this.geolocation.getPosition().then( pos => {
      this.lat = pos.lat;
      this.lng = pos.lng;
      this.getCityName(this.lat, this.lng);
    });
  }

  private getCityName(lat: number, lng: number): void {
    this.cityName = '';
    const LOCATION_URL = AppConstants.GOOGLE_GEOLOCATION_API + lat.toString() + ',' + lng.toString() + AppConstants.GOOGLE_API_KEY;
    this.http.get(LOCATION_URL).subscribe(position => {
      // not magic numbers, this is a static google maps object
      // for initial user location forecast
      this.cityName = position['results'][6]['address_components'][0]['long_name'];
      this.getInitialCityWeather(lat, lng);
    });
  }

  private getInitialCityWeather(lat: number, lng: number): void {
    const WEATHER_URL = AppConstants.OPEN_WEATHER_API
      .replace('{lat}', lat.toString())
      .replace('{lon}', lng.toString())
      .replace('{cnt}', AppConstants.OPEN_WEATHER_API_NUMBER_OF_DAYS.toString()) + AppConstants.OPEN_WEATHER_API_KEY;
    this.http.get(WEATHER_URL).subscribe(weather => {
      this.weather = weather;
      console.log(weather['list']);
      this.isLoading = false;
    });
  }

}
