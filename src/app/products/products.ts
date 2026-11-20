import { Component, inject, signal } from '@angular/core';
import { Product, ProductItem } from '../services/product';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
  standalone: true
})
export class Products {
  private productService = inject(Product);
  products = signal<ProductItem[]>(this.productService.getProducts());

  onDelete(product: ProductItem): void {
    if (confirm(`Delete ${product.name}?`)) {
      this.productService.removeProduct(product.id);
      this.products.set(this.productService.getProducts());
    }
  }
}
