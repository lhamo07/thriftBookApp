import { Component } from '@angular/core';
import { ApiService } from './service/api.service';
import { CartService } from './service/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'thriftBookApp';
  
}
