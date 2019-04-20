import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule, MatFormFieldModule} from  '@angular/material'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule
  ],
  exports:[
    MatInputModule,
    MatFormFieldModule
  ]
})
export class AppMaterialModule { }
