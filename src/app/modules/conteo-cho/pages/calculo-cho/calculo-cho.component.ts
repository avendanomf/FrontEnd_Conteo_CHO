import { Component, OnInit } from '@angular/core';

import { NgbAlertModule, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-calculo-cho',
  templateUrl: './calculo-cho.component.html',
  styleUrls: ['./calculo-cho.component.css']
})
export class CalculoChoComponent implements OnInit {

  model: NgbDateStruct;
  fecha: string |undefined;
  control: string|undefined;
  pesoGramos: number|undefined;
  pesoTabla: number|undefined;
  choTabla: number|undefined;
  gramosCarbohidratos: number|undefined;
  totalCHO: number|undefined;
  comida: string|undefined;
  insulinaCHO: number|undefined;
  glucometriaPre: number|undefined;
  insulinaGlucometria: number|undefined;
  totalInsulina: number|undefined;
  constructor() { 
  }

  ngOnInit(): void {
    
  }

  guardarDatos() {
    // Aquí puedes implementar la lógica para guardar los datos, por ejemplo, enviarlos a un servicio o a una base de datos.
  }

}
