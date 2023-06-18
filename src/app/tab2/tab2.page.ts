import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {PokeapiService} from '../services/pokeapi.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  data:any
  pokemones: any;
  urlImagen: any;

  constructor(
    private route: ActivatedRoute,
    private PokemonService: PokeapiService) {
    
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      console.log(id)
      if (id) {
        this.PokemonService.getPokemones(id).subscribe(respuesta => {
          this.data = respuesta;
          this.pokemones=this.data.pokemon.slice(0,5)
          console.log(this.pokemones)
          
        });
        this.PokemonService.getImagen(id).subscribe(respuesta =>{
          console.log(respuesta)
        })
      }
    });
  }
  async InfoPokemones(name:string){
    this.PokemonService.getImagen(name).subscribe((respuesta:any) =>{
      this.urlImagen=respuesta.sprites.front_default;
    })
  }



}
