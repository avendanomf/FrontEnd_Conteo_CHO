import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculo-cho',
  templateUrl: './calculo-cho.component.html',
  styleUrls: ['./calculo-cho.component.css']
})
export class CalculoChoComponent implements OnInit {

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
