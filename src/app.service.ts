import { Injectable } from '@nestjs/common';

export type Product = {
  id: number | undefined;
  userId: number;
  imageUrl: string | undefined;
  name: string;
  price: number;
  categoryId: number | undefined;
};

let products: Array<Product> = [{
  id: 1,
  userId: 1,
  imageUrl: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1636&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  name: 'Brown Jacket',
  price: 23.5,
  categoryId: 1,
}];

@Injectable()
export class AppService {
  getProducts(): Array<Product> {
    return products;
  }

  getProductById(id: number): Product | undefined {
    const product: Product | undefined = products.find(product => product.id === id)
    return product;
  }

  addProduct(newProduct: Product): Product {
    products.push(newProduct);
    return newProduct;
  }

  updateProduct(updatedProduct: Product): Product {
    products = products.map(product => product.id === updatedProduct.id
      ? { ...product, ...updatedProduct, id: product.id }
      : product
    );
    return updatedProduct;
  }

  deleteProduct(id: number): boolean {
    products = products.filter(product => product.id !== id)
    return true;
  }

}
