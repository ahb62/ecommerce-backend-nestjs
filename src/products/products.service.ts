import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { iProduct } from './interfaces/product.interface';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<iProduct>,
  ) {}

  async create(createProduct: iProduct) {
    return await this.productsRepository.save(createProduct);
  }

  async findAll() {
    return await this.productsRepository.find();
  }

  async findOne(id: number) {
    return await this.productsRepository.findOne({ where: { id: id } });
  }

  async update(id: number, updateProduct: iProduct) {
    const findingProduct = await this.productsRepository.findOne({
      where: { id: id },
    });
    this.productsRepository.merge(findingProduct, updateProduct);
    return await this.productsRepository.save(findingProduct);
  }

  remove(id: number) {
    return this.productsRepository.delete(id);
  }
}
