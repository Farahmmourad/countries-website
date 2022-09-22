import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ContentPageComponent } from './content-page/content-page.component';
import { DetailCountryComponent } from './detail-country/detail-country.component';
import { ListCountriesComponent } from './list-countries/list-countries.component';




const routes: Routes = [ {path : '' , component : ContentPageComponent, 
children: [
  {path : 'countries' , component : ListCountriesComponent, canActivate: [AuthGuard]}, 
  {path : 'detail-country/:name' , component : DetailCountryComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: 'countries', pathMatch: 'full' },
] },
{path: '**', redirectTo: ''} ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class ContentRoutingModule { }