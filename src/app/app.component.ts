import { Component } from '@angular/core';
import { PRODUCTS_SERVICE_BY_VEHICLE } from './constants/vehicles';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items = PRODUCTS_SERVICE_BY_VEHICLE

}
