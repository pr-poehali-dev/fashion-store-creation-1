export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  sizes: string[];
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
}
