import useProductDetail from "hooks/queries/useProductDetail";
import ProductDetailItem from "./StyledProductDetail";
import ImageSlider from "components/common/ImageSlider";

interface ProductDetailType {
  productId: string;
}

const ProductDetail = ({ productId }: ProductDetailType) => {
  const { data } = useProductDetail(productId);

  return (
    <ProductDetailItem.Container>
      {data && (
        <>
          <ImageSlider imageList={data.images} />
          <ProductDetailItem.Main>
            <ProductDetailItem.ProductInfo>
              <span className="brand">{data.brand}</span>
              <h1 className="title">{data.title}</h1>

              <div className="discount_wrap">
                <div className="discount_Percentage">
                  {data.discountPercentage}%
                </div>
                <del>${data.price}</del>
              </div>
              <div className="price">
                $
                {(data.price * ((100 - data.discountPercentage) / 100)).toFixed(
                  2
                )}
              </div>

              <div>{data.description}</div>
              <div>상품 평: {data.rating}</div>
            </ProductDetailItem.ProductInfo>
            <ProductDetailItem.ProductButtonWrap>
              <button className="buy">구매하기</button>
              <button className="cart">장바구니</button>
            </ProductDetailItem.ProductButtonWrap>
          </ProductDetailItem.Main>
        </>
      )}
    </ProductDetailItem.Container>
  );
};

export default ProductDetail;
