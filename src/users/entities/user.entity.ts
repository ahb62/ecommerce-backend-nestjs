import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Product } from 'src/products/entities/product.entity';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', unique: true, nullable: false })
  name: string;

  @Column({ type: 'text', nullable: false })
  password: string;

  @Column({ type: 'text', nullable: false })
  email: string;

  @Column({ type: 'text', nullable: false })
  role: string;

  @Column({ type: 'text', nullable: false })
  phone: string;

  @ManyToMany(() => Product, (product) => product.user)
  @JoinTable()
  product: Product[];
}
