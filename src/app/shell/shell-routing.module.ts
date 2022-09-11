import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{path : 'validation' , loadChildren: () => import('../validation/validation.module').then(m => m.ValidationModule)} ,
 { path: '', redirectTo: '/validation', pathMatch: 'full'},
 {path : 'content' , loadChildren: () => import('../content/content.module').then(m => m.ContentModule)}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ShellRoutingModule { }
