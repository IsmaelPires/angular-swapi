import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { GenericModule } from '../generic/generic.module';
import { SpeciesListComponent } from './species-list/species-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'species',
    component: SpeciesListComponent, data: { title: 'Species List' }
  }
];

@NgModule({
  declarations: [SpeciesListComponent],
  imports: [
    CommonModule, GenericModule, HttpClientModule,
    RouterModule.forRoot(routes, { enableTracing: true })
  ]
})
export class SpeciesModule { }
