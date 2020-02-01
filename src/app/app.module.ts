import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule} from './material-module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CurrentDayComponent } from './components/current-day/current-day.component';
import { FiveDayForecastComponent } from './components/five-day-forecast/five-day-forecast.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { CitiesComponent } from './pages/cities/cities.component';
import { CityComponent } from './pages/city/city.component';
import { NewCityComponent } from './pages/new-city/new-city.component';
import {GeolocationService} from "./service/geolocation.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CurrentDayComponent,
    FiveDayForecastComponent,
    HomeComponent,
    CitiesComponent,
    CityComponent,
    NewCityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    GeolocationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
