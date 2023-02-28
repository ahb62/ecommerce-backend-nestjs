import { iProduct } from 'src/products/interfaces/product.interface';

export interface iUser {
  id: number;
  name: string;
  password: string;
  email: string;
  role: string;
  phone: string;
  product: iProduct[];
}
