export interface ProductType {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface ProductDataType {
  limit: number;
  products: ProductType[];
  skip: number;
  total: number;
}

// id: 1
// title: "iPhone 9"
// description: "An apple mobile which is nothing like apple"
// price: 549
// discountPercentage: 12.96
// rating: 4.69
// stock: 94
// brand: "Apple"
// category: "smartphones"
// thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
