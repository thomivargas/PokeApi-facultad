import { Component  } from '@angular/core';
import { ListadoTiposPage } from '../pages/listado-tipos/listado-tipos.page';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page{
  component = ListadoTiposPage;
  constructor() {}

}
  



