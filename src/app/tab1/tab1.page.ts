import { Component, OnInit  } from '@angular/core';
import { PokeapiService } from '../services/pokeapi.service';
import { PokemonesTipo, Pokemones } from '../interfaces/interfaces'


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  pokemonesTipo: PokemonesTipo[] = []
  pokemones: Pokemones[] = []
  pokemonNombres: string[] = [];
  pokemonId: string[] = []
  constructor( private pokemonService: PokeapiService) {}

  ngOnInit() {
    this.pokemonService.getTipoPokemones().subscribe((data: any) => {
      this.pokemonesTipo=data.results
    })
  }

  async verPokemones(name: string){
    this.pokemonService.getPokemones(name).subscribe(async (respuestaApi: any) => {
      this.pokemones=respuestaApi.pokemon.slice(0,5)
      this.pokemonNombres = respuestaApi.pokemon.slice(0, 5).map((pokemon: any) => pokemon.pokemon.name);
      console.log(respuestaApi)
    })
  };
  
}
  



