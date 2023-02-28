import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
// import { ProductDto } from './dto/product.dto';
import { iProduct } from './interfaces/product.interface';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProduct: iProduct) {
    return this.productsService.create(createProduct);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.productsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateProduct: iProduct) {
    return this.productsService.update(id, updateProduct);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.productsService.remove(id);
  }
}
