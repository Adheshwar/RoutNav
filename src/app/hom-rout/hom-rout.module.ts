import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomCompComponent } from './hom-comp/hom-comp.component';



@NgModule({
  declarations: [HomCompComponent],
  imports: [
    CommonModule
  ],
  exports: [HomCompComponent]
})
export class HomRoutModule { }
