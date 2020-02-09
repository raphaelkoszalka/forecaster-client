import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CitiesComponent} from './pages/cities/cities.component';
import {CityComponent} from './pages/city/city.component';
import {CitiesResolver} from './pages/cities/cities.resolver';


const routes: Routes = [{
  path: '',
  component: CitiesComponent,
  resolve: { cities : CitiesResolver }
}, {
  path: 'cities',
  component: CitiesComponent,
  resolve: { cities : CitiesResolver }
}, {
  path: 'new-city',
  component: CityComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
