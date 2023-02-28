import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Product } from 'src/products/entities/product.entity';
@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  description: string;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
