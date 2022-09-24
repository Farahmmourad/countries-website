import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ValidationRoutingModule } from './validation-routing.module';
import { ValidationPageComponent } from './validation-page/validation-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslocoRootModule } from '../transloco-root.module';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    ValidationPageComponent
  ],
  imports: [
    CommonModule,
    ValidationRoutingModule,
    ReactiveFormsModule,
    TranslocoRootModule
  ],
  exports: [

    ReactiveFormsModule
  ],
  

})
export class ValidationModule { 
  
}
