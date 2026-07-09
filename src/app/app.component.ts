import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuItems = [
    { label: 'Home', path: '/', icon: '' },

    { label: 'Product', path: '/product', icon: 'appstore' },
    { label: 'Order', path: '/order', icon: 'ordered-list' },
    { label: 'Cart', path: '/cart', icon: 'shopping-cart' },
    { label: 'Warehouse', path: '/warehouse', icon: 'dropbox' }
  ];
}

