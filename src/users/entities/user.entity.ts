import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
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

  @ManyToOne(() => Product, (product) => product.user)
  product: Product;
}
