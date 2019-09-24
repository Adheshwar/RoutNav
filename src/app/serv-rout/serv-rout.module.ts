import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServCompComponent } from './serv-comp/serv-comp.component';



@NgModule({
  declarations: [ServCompComponent],
  imports: [
    CommonModule
  ],
  exports: [ServCompComponent]
})
export class ServRoutModule { }
