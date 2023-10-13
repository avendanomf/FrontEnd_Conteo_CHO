import { Component, Output, EventEmitter, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Observable, Subject, debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs';
import { Alimento } from 'src/app/interfaces/alimentos';
import { AlimentosService } from 'src/app/services/alimentos.service';


@Component({
  selector: 'app-resgitro-comidas',
  templateUrl: './resgitro-comidas.component.html',
  styleUrls: ['./resgitro-comidas.component.css']
})
export class ResgitroComidasComponent {
  filas: any[] = [
    { control: '', pesoGramos: '', pesoTabla: '', choTabla: '', gramosCarbohidratos: '' }
  ];
  alimentos: Alimento[] = [];
  keyword = 'name';
  term = new Subject<string>();
  totalCHO: number = 0;
  @Output() totalCHOEvent = new EventEmitter<number>();
  @ViewChild('pesoGramosInput', { static: false }) pesoGramosInput: ElementRef;
  
  
  selectedItem: Alimento | undefined;

  constructor(private alimentosService: AlimentosService, private renderer: Renderer2) {
    this.alimentosService.getAllAlimentos().subscribe(data => {
      this.alimentos = data;
    });
    this.pesoGramosInput = new ElementRef(null);
  }

  agregarFila() {
    this.filas.push({ control: '', pesoGramos: '', pesoTabla: '', choTabla: '', gramosCarbohidratos: '' });    
  }

  quitarFila(index: number) {
    this.filas.splice(index, 1);
    this.calcularTotalCHO();
  }

  selectEvent(fila: any, item: any) {
    fila.pesoTabla = item.peso;
    fila.choTabla = item.gramos;
    const pesoGramosInput = fila.pesoGramosInput;

    if (pesoGramosInput) {
      this.renderer.selectRootElement(pesoGramosInput.nativeElement).focus();
    }
  }
  calcularCHO(fila: any) {
    fila.gramosCarbohidratos = ((fila.pesoGramos * fila.choTabla) / fila.pesoTabla).toFixed(2);
    this.calcularTotalCHO();
  }
  calcularTotalCHO() {
    const totalCHO = this.filas.reduce((total, fila) => total + parseFloat(fila.gramosCarbohidratos.replace(',', '.')) || 0, 0).toFixed(2);
    this.totalCHOEvent.emit(totalCHO);
    // console.log('Total CHO calculado:', totalCHO);
  }


}

