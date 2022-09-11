import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ShellPageComponent } from './shell-page/shell-page.component';
import { ShellRoutingModule } from './shell-routing.module';




@NgModule({
  declarations: [
    LogoComponent,
    
    NavBarComponent,
    FooterComponent,
    ShellPageComponent,
    
  ],
  imports: [
    CommonModule,
    ShellRoutingModule
  ],
  exports: [
    ShellPageComponent
  ]
})
export class ShellModule { }
