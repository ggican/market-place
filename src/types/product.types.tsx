// Define the type for a single category item
export type TCategory = {
  id: number;
  name: string;
};

export interface TProduct {
  id: number;
  name: string | null;
  description: string | null;
  sku: string | null;
  stock: number | null;
  category_id: string | null;
  price: number | null;
  user_id: number;
  image: string | null;
  active: number;
  created_at: string;
  updated_at: string | null;
}

export interface TPayloadProduct {
  name: string;
  description: string;
  sku: string;
  stock: number;
  category_id: number;
  price: number;
  image: string;
}
