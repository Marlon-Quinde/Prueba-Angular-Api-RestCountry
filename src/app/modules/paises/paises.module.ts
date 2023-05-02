import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaisesRoutingModule } from './paises-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { PrimengModule } from 'src/app/design/primeng/primeng.module';
import { MaterialModule } from 'src/app/design/material/material.module';
import { TablaPaisComponent } from './components/tabla-pais/tabla-pais.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    TablaPaisComponent,
    FavoritosComponent
  ],
  imports: [
    CommonModule,
    PaisesRoutingModule,
    SharedModule,

    ReactiveFormsModule,
    FormsModule,

    //Material Design
    PrimengModule,
    MaterialModule
  ]
})
export class PaisesModule { }
