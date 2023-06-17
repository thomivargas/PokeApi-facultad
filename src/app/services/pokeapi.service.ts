import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor(private http: HttpClient) {}

  getTipoPokemones(){
    const apiUrl = `https://pokeapi.co/api/v2/type?limit=10`;
    return this.http.get(apiUrl);
  }   

  getPokemones(name: string){
    const apiUrl = `https://pokeapi.co/api/v2/type/${name}`;
    return this.http.get(apiUrl);
  }

  getImagen(name: string){
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;
      return this.http.get(apiUrl);
  }
}

