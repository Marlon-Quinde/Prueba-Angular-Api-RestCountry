import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-tabla-pais',
  templateUrl: './tabla-pais.component.html',
  styleUrls: ['./tabla-pais.component.css']
})
export class TablaPaisComponent implements OnInit{


  loading: boolean = true;
  paisesData: Pais[] = [];
  //Inputs
  @Input() paises: Pais[] = []
  @Input() favorito: boolean = false
  @Input() eliminar: boolean = false



  //Output
  @Output() onPaisFavorito: EventEmitter<Pais> = new EventEmitter();
  @Output() onDeletePais: EventEmitter<Pais> = new EventEmitter();

  ngOnInit(): void {
    setTimeout( () => {
      this.loading = false
    }, 2000 )
  }

  guardarFavorito(pais: Pais){
    this.onPaisFavorito.emit(pais)
  }

  eliminarFavorito(pais: Pais){
    this.onDeletePais.emit(pais)
  }


}
