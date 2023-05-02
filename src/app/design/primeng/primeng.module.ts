import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { StyleClassModule } from 'primeng/styleclass';

@NgModule({
  exports: [
    ButtonModule,
    ConfirmDialogModule,
    InputTextModule,
    MenubarModule,
    ProgressSpinnerModule,
    TableModule,
    ToastModule,
    StyleClassModule
  ]
})
export class PrimengModule { }
