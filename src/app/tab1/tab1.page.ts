import { Component, OnInit  } from '@angular/core';
import { PokeapiService } from '../services/pokeapi.service';
import { PokemonesTipo, Pokemones } from '../interfaces/interfaces'
import { Tab2Page } from '../tab2/tab2.page';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  component= Tab2Page;
  pokemonesTipo: PokemonesTipo[] = []
  pokemones: Pokemones[] = []
  constructor( private pokemonService: PokeapiService, private router:Router) {}

  ngOnInit() {
    this.pokemonService.getTipoPokemones().subscribe((data: any) => {
      this.pokemonesTipo=data.results
      console.log(this.pokemonesTipo)
    })
  }

  async verPokemones(name: string){
    this.router.navigate(['detalle-pokemones', name])
  };
  
}
  



