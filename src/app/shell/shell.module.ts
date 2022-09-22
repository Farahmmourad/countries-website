import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../content/logo/logo.component';
import { FooterComponent } from './footer/footer.component';
import { ShellPageComponent } from './shell-page/shell-page.component';
import { ShellRoutingModule } from './shell-routing.module';




@NgModule({
  declarations: [
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
