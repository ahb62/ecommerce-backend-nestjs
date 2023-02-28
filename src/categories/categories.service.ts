import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryDto } from './dto/category.dto';
import { Category } from './entities/category.entity';
@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoriesRepository: Repository<CategoryDto>,
  ) {}
  async create(createCategoryDto: CategoryDto) {
    return await this.categoriesRepository.save(createCategoryDto);
  }

  async findAll() {
    return await this.categoriesRepository.find();
  }

  async findOne(id: number) {
    return await this.categoriesRepository.findOne({ where: { id: id } });
  }

  async update(id: number, updateCategoryDto: CategoryDto) {
    const updatingCategory = await this.categoriesRepository.findOne({
      where: { id: id },
    });
    this.categoriesRepository.merge(updatingCategory, updateCategoryDto);
    return await this.categoriesRepository.save(updatingCategory);
  }

  remove(id: number) {
    return this.categoriesRepository.delete(id);
  }
}
