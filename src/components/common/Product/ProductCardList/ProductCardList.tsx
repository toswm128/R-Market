import GoodsCard from "components/common/Product/ProductCard/ProductCard";
import ProductCardListItem from "./StyledProductCardLIst";
import { ProductType } from "types/product";

interface ProductCardListProps {
  products?: ProductType[];
}

const ProductCardList = ({ products }: ProductCardListProps) => {
  return (
    <ProductCardListItem.Container>
      {products?.map((product) => (
        <GoodsCard product={product} key={product.id} />
      ))}
    </ProductCardListItem.Container>
  );
};

export default ProductCardList;
