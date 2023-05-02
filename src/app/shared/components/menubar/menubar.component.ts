import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent {

  items: MenuItem[] = [];

    ngOnInit() {
        this.items = [
            {
                label: 'Buscar Pais',
                icon: 'pi pi-fw pi-file',
                routerLink: '../home'
            },
            {
                label: 'Ver favoritos',
                icon: 'pi pi-fw pi-file',
                routerLink: '../favoritos'
            },
            {
                label: 'Salir',
                icon: 'pi pi-fw pi-power-off',
                routerLink: '../../'
            }
        ];
    }
}
