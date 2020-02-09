import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule} from './material-module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CitiesComponent } from './pages/cities/cities.component';
import { CityComponent } from './pages/city/city.component';
import { GeolocationService } from './service/geolocation.service';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './components/loader/loader.component';
import { CityCardComponent } from './components/city-card/city-card.component';
import { FormsModule } from '@angular/forms';
import { CitiesResolver } from './pages/cities/cities.resolver';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CitiesComponent,
    CityComponent,
    LoaderComponent,
    CityCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    GeolocationService,
    CitiesResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
