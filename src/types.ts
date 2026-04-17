export type Category = 'Men' | 'Women' | 'Sports' | 'Casual';

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: Category;
  images: string[];
  description: string;
  sizes: number[];
  color: string;
  isNew?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: number;
}
