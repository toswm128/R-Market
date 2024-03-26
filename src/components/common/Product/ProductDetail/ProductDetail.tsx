import useProductDetail from "hooks/queries/useProductDetail";
import ProductDetailItem from "./StyledProductDetail";
import { useEffect, useRef } from "react";

interface ProductDetailType {
  productId: string;
}

const ProductDetail = ({ productId }: ProductDetailType) => {
  const { data } = useProductDetail(productId);
  const sliderRef = useRef<any>();

  const handlePrevSlide = () => {
    sliderRef.current?.scrollBy({
      left: -100,
      behavior: "smooth",
    });
  };
  const handleNextSlide = () => {
    sliderRef.current?.scrollBy({ left: 100, behavior: "smooth" });
  };

  return (
    <ProductDetailItem.Container>
      {data && (
        <>
          <button onClick={() => handlePrevSlide()}>뒤로</button>
          <button onClick={() => handleNextSlide()}>앞으로</button>
          <ProductDetailItem.ImageSlider ref={sliderRef}>
            {data.images.map((image, key) => (
              <img key={key} src={image} alt="" />
            ))}
          </ProductDetailItem.ImageSlider>
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
