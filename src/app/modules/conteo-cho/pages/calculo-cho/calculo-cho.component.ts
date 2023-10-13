import { Component, OnInit } from '@angular/core';
import { NgbAlertModule, NgbCalendar, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ParametersService } from '../../../../services/parameters.service';



@Component({
  selector: 'app-calculo-cho',
  templateUrl: './calculo-cho.component.html',
  styleUrls: ['./calculo-cho.component.css']
})
export class CalculoChoComponent implements OnInit {


  Ratio: number = 0;
  Sensibilidad: number = 0;
  gluMax: number = 0;
  glucoMin: number = 0;

  model: NgbDateStruct | undefined;
  today = this.calendar.getToday();

  fecha: string | undefined;
  control: string | undefined;
  pesoGramos: number | undefined;
  pesoTabla: number | undefined;
  choTabla: number | undefined;
  gramosCarbohidratos: number | undefined;
  totalCHO: number = 0;
  comida: string | undefined;
  insulinaCHO: number = 0;
  glucometriaPre: number | undefined;
  insulinaGlucometria: number = 0;
  totalInsulina: number = 0;

  constructor(private calendar: NgbCalendar, private parameterService: ParametersService) {
    this.model = this.calendar.getToday();
  }

  ngOnInit(): void {
    this.parameterService.getAllParameters().subscribe(data => {
      if (data.length > 0) {
        const parameter = data[0];
        //console.log(JSON.stringify(parameter));

        this.Ratio = parameter.Ratio;
        this.Sensibilidad = parameter.Sensibilidad;
        this.gluMax = parameter.gluMax;
        this.glucoMin = parameter.glucoMin;
      }
    });
  }
  actualizarTotalCHO(total: any) {
    this.totalCHO = total;
    this.calcInsulinaCHO();
  }
  calcInsulinaCHO() {
    //console.log('totalcho: '+ this.totalCHO);
    if (this.totalCHO !== undefined && this.Ratio !== undefined) {
      this.insulinaCHO = parseFloat((this.totalCHO / this.Ratio).toFixed(2));
    } else {
      this.insulinaCHO = 0;
    }
    this.insulinaxGluco();
    //console.log(this.insulinaCHO);
  }

  insulinaxGluco() {
    if ( this.glucometriaPre != undefined && this.glucometriaPre  < this.gluMax ) 
    {
      this.insulinaGlucometria = parseFloat(((this.glucometriaPre - this.glucoMin) / this.Sensibilidad).toFixed(2));
    }
    if (this.insulinaCHO != undefined && this.insulinaGlucometria != undefined) {
      this.totalInsulina = Math.round(this.insulinaCHO + this.insulinaGlucometria);
    }
    //console.log(this.totalInsulina);
  }

  guardarDatos() {
    // Aquí puedes implementar la lógica para guardar los datos, por ejemplo, enviarlos a un servicio o a una base de datos.
  }

}
