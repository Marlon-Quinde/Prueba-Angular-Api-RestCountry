import { ConfirmEventType, ConfirmationService, MessageService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class FavoritosComponent implements OnInit{
  paises: Pais[] = [];
  hayError: boolean = false;

  constructor(private paisesService: PaisesService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService){  }

  ngOnInit(): void {
    if(!localStorage.getItem('favoritos')){
      this.hayError = true
      return
    }

    this.mostrarFavoritos()


  }




  mostrarFavoritos(){
    this.hayError = false
    this.paisesService.buscarFavoritos().subscribe({
      next: (resp) => {
        this.paises = resp
      },
      error: (err) => {
        this.hayError = true
        this.paises = []
      },

    })
  }


  verificar(pais: Pais) {
    this.confirmationService.confirm({
        message: 'Desea eliminar "'+pais.name.common+'" de favoritos?',
        header: 'Precaucion',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.messageService.add({ severity: 'info', summary: 'Exito', detail: 'Se elimino "'+pais.name.common+'" de favoritos.' });
            this.quitar(pais)
        },
        reject: (type:any) => {
            switch (type) {
                case ConfirmEventType.REJECT:
                    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se elimino "'+pais.name.common+'" de favoritos.' });
                    break;
                case ConfirmEventType.CANCEL:
                    this.messageService.add({ severity: 'warn', summary: 'Advertencia', detail: 'You have cancelled' });
                    break;
            }
        }
    });
}

  //Guardar pais
  quitar(pais: Pais){
    if (!localStorage.getItem('favoritos')) return

    const codigo = pais.cca2
    const favoritos = localStorage.getItem('favoritos')
    const arreglo = favoritos?.split(',')


    const indice = arreglo?.indexOf(codigo);
    if (indice !== -1) {
      arreglo?.splice(indice!, 1);
    }
    localStorage.setItem('favoritos', arreglo!.join())
    this.mostrarFavoritos()

  }
}
