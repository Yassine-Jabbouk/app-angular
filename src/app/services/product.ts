import { Injectable } from '@angular/core';

export interface ProductItem {
  id: number;
  name: string;
  price: number;
  available: boolean;
}

@Injectable({ providedIn: 'root' })
export class Product {
  private items: ProductItem[] = [
    { id: 1, name: 'Laptop', price: 8500, available: true },
    { id: 2, name: 'Printer', price: 1200, available: false },
    { id: 3, name: 'Phone', price: 3200, available: true },
    { id: 4, name: 'Headphones', price: 450, available: true },
  ];

  getProducts(): ProductItem[] {
    return this.items;
  }

  removeProduct(id: number): void {
    this.items = this.items.filter((p) => p.id !== id);
  }
}
