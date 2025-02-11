type ProductItem = {
  id: string;
  name: string;
  img: string;
  description: string;
  price: number;
};

type ProductCategory = {
  category: string;
  items: ProductItem[];
};

type ProductType = ProductCategory[];
