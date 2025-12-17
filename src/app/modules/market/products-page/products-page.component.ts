import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent {
  products = [
    { name: 'Organic Apples', price: '$3.50' },
    { name: 'Almond Milk', price: '$4.25' },
    { name: 'Whole Grain Bread', price: '$2.75' },
    { name: 'Fresh Eggs (dozen)', price: '$3.99' }
  ];
}
