import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculoChoComponent } from './pages/calculo-cho/calculo-cho.component';

const routes:Routes=[
{
  path:'',
  children:[
    {path:'inicio',component: CalculoChoComponent},
    {path:'**',redirectTo:'inicio'}
  ]
}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ConteoChoRoutingModule { }
