import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoPokemonPage } from './listado-pokemon.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoPokemonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoPokemonPageRoutingModule {}
