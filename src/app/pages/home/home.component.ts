import { Component, OnInit } from '@angular/core';
import {GeolocationService} from '../../service/geolocation.service';
import {HttpServiceService} from '../../service/http-service.service';
import {AppConstant} from '../../AppConstant';

@Component({
  selector: 'app-main-card',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  private lng: number;
  private lat: number;
  public cityName: string;

  // IMPORTANT NOTE:
  // I chose to not use a Resolver Pattern on HomePageComponent because the end user
  // might not allow browser to allow Geolocation API and then it would not instantiate the component
  // I know that I can write a simple bussiness rule to avoid that, it's just a matter of the little timeframe
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
    const LOCATION_URL = AppConstant.GEOLOCATION_API + this.lat + ',' + this.lng + AppConstant.API_KEY;
    console.log(LOCATION_URL);
    this.http.get(AppConstant.GEOLOCATION_API + this.lat + ',' + this.lng + AppConstant.API_KEY).subscribe(position => {
      // not magic numbers, this is a static google maps object
      // for initial user location forecast
      this.cityName = position['results'][6]['address_components'][0]['long_name'];
    });
  }
}
