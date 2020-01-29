import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { GenericModule } from '../generic/generic.module';
import { PlanetsListComponent } from './planets-list/planets-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'planets',
    component: PlanetsListComponent, data: { title: 'Planets List' }
  }
];

@NgModule({
  declarations: [PlanetsListComponent],
  imports: [
    CommonModule, GenericModule, HttpClientModule,
    RouterModule.forRoot(routes, { enableTracing: true })
  ]
})
export class PlanetsModule { }
