import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'home',
    loadChildren:()=>import('./modules/conteo-cho/conteo-cho.module').then(m => m.ConteoChoModule)
  },
  {
    path:'**',
    redirectTo:'home'
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
