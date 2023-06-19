import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../../services/pokeapi.service';
import { PokemonesTipo, Pokemones } from '../../interfaces/interfaces'
import { Router } from '@angular/router';
import { ListadoPokemonPage } from '../listado-pokemon/listado-pokemon.page';

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
  constructor(private pokemonService: PokeapiService, private router:Router) { }

  ngOnInit() {
    this.pokemonService.getTipoPokemones().subscribe((data: any) => {
      this.pokemonesTipo=data.results
      console.log(this.pokemonesTipo)
      this.buscarPokemon = this.pokemonesTipo
    })
  }

  async verPokemones(name: string){
    this.router.navigate(['listado-pokemon', name])
  };
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
