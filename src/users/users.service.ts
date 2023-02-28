import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { User } from './entities/user.entity';
import { UserDto } from './dto/user.dto';
import { Product } from 'src/products/entities/product.entity';
import { iProduct } from 'src/products/interfaces/product.interface';
import { iUser } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<iUser>,
    @InjectRepository(Product)
    private productsRepository: Repository<iProduct>,
  ) {}

  async create(createUserDto: UserDto) {
    return await this.usersRepository.save(createUserDto);
  }

  async addProductToUser(userId: number, productId: number[]) {
    const user = await this.usersRepository.findOne({ where: { id: userId } });
    const products = await this.productsRepository.findBy({
      id: In(productId),
    });
    user.product = products;
    return await this.usersRepository.save(user);
  }

  async findAll() {
    return await this.usersRepository.find();
  }

  async findOne(id: number) {
    return await this.usersRepository.findOne({ where: { id: id } });
  }

  async update(id: number, updateUserDto: UserDto) {
    const updatingUser = await this.usersRepository.findOne({
      where: { id: id },
    });
    await this.usersRepository.merge(updatingUser, updateUserDto);
    return await this.usersRepository.save(updatingUser);
  }

  async remove(id: number) {
    return await this.usersRepository.delete(id);
  }
}
