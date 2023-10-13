import { Component, OnInit } from '@angular/core';
import { NgbAlertModule, NgbCalendar, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ParametersService } from '../../../../services/parameters.service';
import { Parameter } from 'src/app/interfaces/parameter';



@Component({
  selector: 'app-calculo-cho',
  templateUrl: './calculo-cho.component.html',
  styleUrls: ['./calculo-cho.component.css']
})
export class CalculoChoComponent implements OnInit {


  parameter: Parameter ;

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
    this.parameter = new Parameter();
  }

  ngOnInit(): void {
    this.parameterService.getAllParameters().subscribe(data => {
      if (data.length > 0) {
        const parameter = data[0];
        //console.log(JSON.stringify(parameter));

        this.parameter.Ratio = parameter.Ratio;
        this.parameter.Sensibilidad = parameter.Sensibilidad;
        this.parameter.gluMax = parameter.gluMax;
        this.parameter.glucoMin = parameter.glucoMin;
        this.parameter.glucoMeta = parameter.glucoMeta;
      }
    });
  }
  actualizarTotalCHO(total: any) {
    this.totalCHO = total;
    this.calcInsulinaCHO();
  }
  calcInsulinaCHO() {
    //console.log('totalcho: '+ this.totalCHO);
    if (this.totalCHO !== undefined && this.parameter.Ratio !== undefined) {
      this.insulinaCHO = parseFloat((this.totalCHO / this.parameter.Ratio).toFixed(2));
    } else {
      this.insulinaCHO = 0;
    }
    this.insulinaxGluco();
    //console.log(this.insulinaCHO);
  }

  insulinaxGluco() {
    if ( this.glucometriaPre != undefined ) 
    {
      this.insulinaGlucometria = parseFloat(((this.glucometriaPre - this.parameter.glucoMeta) / this.parameter.Sensibilidad).toFixed(2));
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
