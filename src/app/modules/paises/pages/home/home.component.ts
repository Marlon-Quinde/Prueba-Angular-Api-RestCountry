import { MessageService } from 'primeng/api';
import { Pais } from './../../interfaces/pais.interface';
import { Component } from '@angular/core';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MessageService]
})
export class HomeComponent {


  paises: Pais[] = [];
  value: string = '';
  hayError: boolean = false;
  paisesFavoritos: string[] = []

  constructor(private paisesService: PaisesService,
              private messageService: MessageService){  }


  //Buscar pais

  buscar(){

    this.hayError = false
    this.paisesService.search(this.value).subscribe({
      next: (resp) => {
        this.paises = resp
      },
      error: (error) => {
        this.hayError = true
        this.paises = []
      },
    })
  }

  //Guardar pais
  guardarPais(pais: Pais){

    const codigo = pais.cca2

    if (!this.paisesFavoritos.includes(codigo)) {
      this.paisesFavoritos.push(codigo);
      localStorage.setItem('favoritos', this.paisesFavoritos.join())
      this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Se añadio "'+pais.name.common+'" a favoritos.'})
      return
    }

    this.messageService.add({ severity: 'warn', summary: 'Advertencia', detail: '"'+pais.name.common+'" ya se encuentra en favoritos.'})



  }
}
