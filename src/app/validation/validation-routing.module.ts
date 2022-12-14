import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ValidationPageComponent } from './validation-page/validation-page.component';


const routes: Routes = [
{path : '' , component : ValidationPageComponent,
children: [ 
  {path : 'login' , component : LoginComponent},
  {path : 'register' , component : RegisterComponent}, 
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
]},
{path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValidationRoutingModule { }