import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarComponent } from './components/menubar/menubar.component';
import { MaterialModule } from '../design/material/material.module';
import { PrimengModule } from '../design/primeng/primeng.module';



@NgModule({
  declarations: [
    MenubarComponent
  ],
  imports: [
    CommonModule,

    MaterialModule,
    PrimengModule
  ],
  exports:[
    MenubarComponent
  ]
})
export class SharedModule { }
