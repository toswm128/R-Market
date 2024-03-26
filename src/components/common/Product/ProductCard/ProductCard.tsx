import { ProductType } from "types/product";
import GoodsCardItem from "./StyledProductCard";
import { Link } from "react-router-dom";

interface GoodsCardProps {
  product: ProductType;
}

const GoodsCard = ({ product }: GoodsCardProps) => {
  return (
    <GoodsCardItem.Container>
      <Link className="card_wrap" to={"product/" + product.id}>
        <div>
          <img src={product.thumbnail} alt="" />
          <GoodsCardItem.Title>{product.title}</GoodsCardItem.Title>
          <GoodsCardItem.Description>
            {product.description}
          </GoodsCardItem.Description>
        </div>
        <GoodsCardItem.PriceWrap>
          <div className="discount_wrap">
            <sup className="discount_Percentage">
              {product.discountPercentage}%
            </sup>
            <del>${product.price}</del>
          </div>
          <div className="price">
            $
            {(
              product.price *
              ((100 - product.discountPercentage) / 100)
            ).toFixed(2)}
          </div>
          <div>상품평: {product.rating}</div>
        </GoodsCardItem.PriceWrap>
      </Link>
    </GoodsCardItem.Container>
  );
};

export default GoodsCard;
