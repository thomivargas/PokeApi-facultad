import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoTiposPage } from './listado-tipos.page';
import { ListadoPokemonPage } from '../listado-pokemon/listado-pokemon.page';

const routes: Routes = [
  {
    path: 'listado-tipos',
    component: ListadoTiposPage
  },
  {
    path: 'listado-pokemon/:id',
    component: ListadoPokemonPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoTiposPageRoutingModule {}
