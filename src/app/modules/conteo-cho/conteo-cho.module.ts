import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculoChoComponent } from './pages/calculo-cho/calculo-cho.component';
import { ConteoChoRoutingModule } from './conteo-cho-routing.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ResgitroComidasComponent } from 'src/app/components/resgitro-comidas/resgitro-comidas.component';
import { HttpClientModule } from '@angular/common/http';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';




@NgModule({
  declarations: [
    CalculoChoComponent,
    ResgitroComidasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ConteoChoRoutingModule,
    NgbModule,
    HttpClientModule,
    AutocompleteLibModule

  ]
})
export class ConteoChoModule { }
