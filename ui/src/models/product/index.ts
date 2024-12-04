export interface Product {
  id: string;
  name: string;
  price: number;
  stockAvailable: number;
  imgSrc: string;
  description?: string;
}

export interface SelectedProduct extends Product {
  quantity: number;
}
