import { Component } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { AppConstants } from '../../app-constants';
import { CityModel } from './city.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent {

  public cityName: string;
  public city: CityModel;

  constructor(private http: HttpService, private router: Router) { }

  private getCityDetails(url: string): void {
    this.http.get(url).subscribe(
      res => {
        this.city = { city: res['name'], lat: res['coord']['lat'], lng: res['coord']['lon'] };
        this.http.post(AppConstants.SERVER_API_POST, this.city)
          .subscribe(postRes => {
            alert('City saved with success.');
            this.router.navigate(['/']);
          });
      });
  }

  public saveCity(city): void {
    const CITY_URL = AppConstants.OPEN_WEATHER_API_CITY_EXISTS
      .replace('{city}', city) + AppConstants.OPEN_WEATHER_API_KEY;
    this.getCityDetails(CITY_URL);
  }

}
