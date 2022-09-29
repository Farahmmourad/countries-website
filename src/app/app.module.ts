import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellModule } from './shell/shell.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule, } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { countriesReducer } from './state/content/content.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ContentEffects } from './state/content/content.effects';
import { AppHttpInterceptorService } from './validation/app-http-interceptor.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TranslocoRootModule } from './transloco-root.module';


@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShellModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ countryState : countriesReducer}),
    EffectsModule.forRoot([ContentEffects]),
    TranslocoRootModule,
    StoreDevtoolsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptorService,
      multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
