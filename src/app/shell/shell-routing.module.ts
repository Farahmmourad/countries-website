import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {path : 'validation' , loadChildren: () => import('../validation/validation.module').then(m => m.ValidationModule)} ,
{path : 'content' , loadChildren: () => import('../content/content.module').then(m => m.ContentModule)},
{ path: '**', redirectTo: 'validation'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash: true})],
  exports: [RouterModule]
})
export class ShellRoutingModule { }
