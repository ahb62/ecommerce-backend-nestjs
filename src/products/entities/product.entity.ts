import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  ManyToMany,
} from 'typeorm';
import { Category } from 'src/categories/entities/category.entity';
import { User } from 'src/users/entities/user.entity';
@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', unique: true, nullable: false })
  name: string;

  @Column({ type: 'text', nullable: false })
  image: string;

  @Column({ type: 'text', nullable: false, default: 'No description' })
  description: string;

  @Column({ type: 'float', nullable: false })
  price: number;

  @Column({ type: 'int', nullable: false })
  quantity: number;

  @ManyToOne(() => Category, (category) => category.products)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @ManyToMany(() => User, (user) => user.product)
  user: User;
}
