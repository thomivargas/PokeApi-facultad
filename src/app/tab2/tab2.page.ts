import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {PokeapiService} from '../services/pokeapi.service';
import { Tab1Page } from '../tab1/tab1.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  component= Tab1Page;
  data:any
  pokemones: any;
  pokemonesTipo: any;
  urlImagen: any;

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private PokemonService: PokeapiService) {
    
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.pokemonesTipo=id
      if (id) {
        this.PokemonService.getPokemones(id).subscribe(respuesta => {
          this.data = respuesta;
          this.pokemones=this.data.pokemon.slice(0,5)
          console.log(this.pokemones)
        });
      }
    });
  }
  async InfoPokemones(name:string){
    this.PokemonService.getImagen(name).subscribe((respuesta:any) =>{
      this.urlImagen=respuesta.sprites.front_default;
    })
  }

}
