import GoodsCard from "components/common/Product/ProductCard/ProductCard";
import ProductCardListItem from "./StyledProductCardLIst";
import { ProductListDataType } from "types/product";

interface ProductCardListProps {
  pages?: {
    data: ProductListDataType;
    isLast: boolean;
    nextPage: number;
  }[];
}

const ProductCardList = ({ pages }: ProductCardListProps) => {
  return (
    <ProductCardListItem.Container>
      {pages?.map(({ data }) =>
        data.products.map((product) => (
          <GoodsCard product={product} key={product.id} />
        ))
      )}
    </ProductCardListItem.Container>
  );
};

export default ProductCardList;
