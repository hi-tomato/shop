export interface Products {
  id: string;
  name: string;
  brand: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  tags: string[];
  rating?: number;
  reviewCount?: number;
}
