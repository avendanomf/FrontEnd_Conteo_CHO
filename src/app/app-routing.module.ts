import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'home',
    loadChildren:()=>import('./modules/conteo-cho/conteo-cho.module').then(m => m.ConteoChoModule)
  },
  {
    path:'report',
    loadChildren:()=>import('./modules/reporte-cho/reporte-cho.module').then(m => m.ReporteCHOModule)
  }
  ,
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
