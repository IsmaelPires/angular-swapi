import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { AsideComponent } from './aside/aside.component';
import { SectionComponent } from './section/section.component';
import { ArticleComponent } from './article/article.component';
import { FooterComponent } from './footer/footer.component';
import {FilmsModule} from '../films/films.module'
import { PeopleModule } from '../people/people.module';
import { PlanetsModule } from '../planets/planets.module';
import { VehiclesModule } from '../vehicles/vehicles.module';
import { SpeciesModule } from '../species/species.module';
import { StarshipsModule } from '../starships/starships.module';
​
​@NgModule({
  declarations: [NavComponent, AsideComponent, SectionComponent, ArticleComponent, FooterComponent],
  imports: [
    CommonModule,
    FilmsModule, PeopleModule, PlanetsModule, VehiclesModule, SpeciesModule, StarshipsModule
  ],
  exports: [NavComponent, AsideComponent, SectionComponent, ArticleComponent, FooterComponent]
})
export class SharedModuleModule { }