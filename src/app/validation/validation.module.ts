import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ValidationRoutingModule } from './validation-routing.module';
import { ValidationPageComponent } from './validation-page/validation-page.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    ValidationPageComponent
  ],
  imports: [
    CommonModule,
    ValidationRoutingModule,
    ReactiveFormsModule
  ],
  exports: [

    ReactiveFormsModule
  ],
  

})
export class ValidationModule { 
  
}
