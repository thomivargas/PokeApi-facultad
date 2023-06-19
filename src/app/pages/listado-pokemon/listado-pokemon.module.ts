import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoPokemonPageRoutingModule } from './listado-pokemon-routing.module';

import { ListadoPokemonPage } from './listado-pokemon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoPokemonPageRoutingModule
  ],
  declarations: [ListadoPokemonPage]
})
export class ListadoPokemonPageModule {}
