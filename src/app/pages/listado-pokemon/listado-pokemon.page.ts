import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {PokeapiService} from '../../services/pokeapi.service';
import { ListadoTiposPage } from '../listado-tipos/listado-tipos.page';


@Component({
  selector: 'app-listado-pokemon',
  templateUrl: './listado-pokemon.page.html',
  styleUrls: ['./listado-pokemon.page.scss'],
})
export class ListadoPokemonPage implements OnInit {
  component = ListadoTiposPage;
  data:any
  pokemones: any;
  pokemonesTipo: any;
  urlImagen: any;
  urlImagenBack: any;
  PokemonName: any
  PokemonHabilidad: any
  ocultarCard: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private PokemonService: PokeapiService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.pokemonesTipo=id
      if (id) {
        this.PokemonService.getPokemones(id).subscribe(respuesta => {
          this.data = respuesta;
          this.pokemones=this.data.pokemon.slice(0,5)
        });
      }
    });
  }
  async InfoPokemones(name:string){
    this.PokemonService.getImagen(name).subscribe((respuesta:any) =>{
      this.PokemonName = respuesta.forms
      this.PokemonHabilidad = respuesta.abilities
      this.urlImagen = respuesta.sprites.front_default;
      this.urlImagenBack = respuesta.sprites.back_default;
      this.ocultarCard = true;
    })
  }
  ocultar() {
    this.ocultarCard = false;
  }

}
