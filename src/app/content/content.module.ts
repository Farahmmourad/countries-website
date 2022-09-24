import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCountriesComponent } from './list-countries/list-countries.component';
import { DetailCountryComponent } from './detail-country/detail-country.component';
import { ContentRoutingModule } from './content-routing.module';
import { ContentPageComponent } from './content-page/content-page.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { SearchComponent } from './search/search.component';
import { EffectsModule } from '@ngrx/effects';
import { ContentEffects } from '../state/content/content.effects';
import { StoreModule } from '@ngrx/store';
import { countriesReducer } from '../state/content/content.reducer';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LogoComponent } from './logo/logo.component';
import { TranslocoRootModule } from '../transloco-root.module';




@NgModule({
  declarations: [
    ListCountriesComponent,
    DetailCountryComponent,
    ContentPageComponent,
    SearchComponent,
    NavBarComponent,
    LogoComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    HttpClientModule,
    MatSelectModule,
    TranslocoRootModule
   
  ]
})
export class ContentModule { }
