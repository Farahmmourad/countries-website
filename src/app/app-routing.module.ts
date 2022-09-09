import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellPageComponent } from './shell/shell-page/shell-page.component';

const routes: Routes =  [ ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
