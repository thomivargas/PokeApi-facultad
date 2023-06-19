import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../../services/pokeapi.service';
import { PokemonesTipo, Pokemones } from '../../interfaces/interfaces'
import { Router } from '@angular/router';
import { ListadoPokemonPage } from '../listado-pokemon/listado-pokemon.page';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-listado-tipos',
  templateUrl: './listado-tipos.page.html',
  styleUrls: ['./listado-tipos.page.scss'],
})
export class ListadoTiposPage implements OnInit {
  component = ListadoPokemonPage;
  pokemonesTipo: PokemonesTipo[] = []
  pokemones: Pokemones[] = []
  buscarPokemon: any;
  constructor(
    private pokemonService: PokeapiService, 
    private router:Router,
    private loadingController: LoadingController
    ) { }

  ngOnInit() {
    this.pokemonService.getTipoPokemones().subscribe((data: any) => {
      this.pokemonesTipo=data.results
      console.log(this.pokemonesTipo)
      this.buscarPokemon = this.pokemonesTipo
    })
  }

  async verPokemones(name: string){
    await this.mostrarLoading();
    this.router.navigate(['listado-pokemon', name])
  };
  async mostrarLoading() {
    const loading = await this.loadingController.create({
      message: 'Cargando...',
      duration: 250 // Duración en milisegundos (opcional)
    });
  
    await loading.present();
  }
  buscarNombre(event:any){
    const text= event.target.value;
   this.buscarPokemon = this.pokemonesTipo
   if (text&& text.trim() !=''){
    this.buscarPokemon = this.buscarPokemon.filter((pokemonesTipos: any)=>{
      return (pokemonesTipos.name.toLowerCase().indexOf(text.toLowerCase())) > -1
   })
   }
  }
}
