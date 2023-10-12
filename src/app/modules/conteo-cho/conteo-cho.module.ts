import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculoChoComponent } from './pages/calculo-cho/calculo-cho.component';
import { ConteoChoRoutingModule } from './conteo-cho-routing.module';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    CalculoChoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ConteoChoRoutingModule
  ]
})
export class ConteoChoModule { }
