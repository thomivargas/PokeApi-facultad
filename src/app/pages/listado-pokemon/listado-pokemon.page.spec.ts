import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoPokemonPage } from './listado-pokemon.page';

describe('ListadoPokemonPage', () => {
  let component: ListadoPokemonPage;
  let fixture: ComponentFixture<ListadoPokemonPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListadoPokemonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
