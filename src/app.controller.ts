import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService, Product } from './app.service';

@Controller('products')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getAll(): Array<Product> {
    return this.appService.getProducts();
  }

  @Get(':id')
  getProduct(@Param params: string): Array<Product> {
    return this.appService.getProduct(params.id);
  }

  @Post()
  addProduct(@Body() body: Product): Product {
    const newProduct = {
      userId: body.userId,
      name: body.name,
      price: body.price,
    };
    return this.appService.addProduct(newProduct);
  }

  @Put()
  updateProduct(@Body() body: Product): Product {
    const updatedProduct = {
      id: body.id,
      userId: body.userId,
      name: body.name,
      price: body.price,
    };
    return this.appService.updateProduct(updatedProduct);
  }

  @Delete()
  deleteProduct(Param() params: number): boolean {
  return this.appService.deleteProduct();
}

@Get()
getUserProducts(): Array < Product > {
  return this.appService.getUserProducts();
}
}
