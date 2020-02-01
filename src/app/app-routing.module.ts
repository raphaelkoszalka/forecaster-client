import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {CitiesComponent} from './pages/cities/cities.component';
import {NewCityComponent} from "./pages/new-city/new-city.component";


const routes: Routes = [{
    path: '',
    component: HomeComponent
  }, {
    path: 'cities',
    component: CitiesComponent
  }, {
    path: 'new-city',
    component: NewCityComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
