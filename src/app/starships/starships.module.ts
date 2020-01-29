import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { GenericModule } from '../generic/generic.module';
import { StarshipsListComponent } from './starships-list/starships-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'starships',
    component: StarshipsListComponent, data: { title: 'Starships List' }
  }
];

@NgModule({
  declarations: [StarshipsListComponent],
  imports: [
    CommonModule, GenericModule, HttpClientModule,
    RouterModule.forRoot(routes, { enableTracing: true })
  ]
})
export class StarshipsModule { }
