import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoTiposPageRoutingModule } from './listado-tipos-routing.module';

import { ListadoTiposPage } from './listado-tipos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoTiposPageRoutingModule
  ],
  declarations: [ListadoTiposPage]
})
export class ListadoTiposPageModule {}
