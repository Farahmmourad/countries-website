import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentPageComponent } from './content-page/content-page.component';
import { DetailCountryComponent } from './detail-country/detail-country.component';
import { ListCountriesComponent } from './list-countries/list-countries.component';



const routes: Routes = [ {path : '' , component : ContentPageComponent, 
children: [
  {path : 'countries' , component : ListCountriesComponent}, 
  {path : 'detail-country/:name' , component : DetailCountryComponent},
  { path: '**', redirectTo: 'countries', pathMatch: 'full' },
] },
{path: '**', redirectTo: ''} ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }