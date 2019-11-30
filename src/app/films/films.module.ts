import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { GenericModule } from '../generic/generic.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, GenericModule, HttpClientModule
  ]
})
export class FilmsModule { }