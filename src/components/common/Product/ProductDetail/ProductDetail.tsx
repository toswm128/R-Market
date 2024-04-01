import useProductDetail from "hooks/queries/useProductDetail";
import ProductDetailItem from "./StyledProductDetail";
import { useEffect, useRef } from "react";
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
          <div>{data.title}</div>
          <div>{data.brand}</div>
          <div>{data.category}</div>
          <div>{data.stock}</div>
          <div>{data.description}</div>
          <div>{data.rating}</div>
        </>
      )}
    </ProductDetailItem.Container>
  );
};

export default ProductDetail;
