import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoTiposPage } from './listado-tipos.page';

describe('ListadoTiposPage', () => {
  let component: ListadoTiposPage;
  let fixture: ComponentFixture<ListadoTiposPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListadoTiposPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
