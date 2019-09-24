import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConCompComponent } from './con-comp/con-comp.component';



@NgModule({
  declarations: [ConCompComponent],
  imports: [
    CommonModule
  ],
  exports: [ConCompComponent]
})
export class ConRoutModule { }
