import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
  },
  {
    path: 'listado-tipos',
    loadChildren: () => import('./pages/listado-tipos/listado-tipos.module').then( m => m.ListadoTiposPageModule)
  },
  {
    path: 'listado-pokemon/:id',
    loadChildren: () => import('./pages/listado-pokemon/listado-pokemon.module').then( m => m.ListadoPokemonPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
