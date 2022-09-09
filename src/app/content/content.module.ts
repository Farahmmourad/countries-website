import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCountriesComponent } from './list-countries/list-countries.component';
import { DetailCountryComponent } from './detail-country/detail-country.component';
import { ContentRoutingModule } from './content-routing.module';
import { ContentPageComponent } from './content-page/content-page.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ListCountriesComponent,
    DetailCountryComponent,
    ContentPageComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    HttpClientModule
  ]
})
export class ContentModule { }
