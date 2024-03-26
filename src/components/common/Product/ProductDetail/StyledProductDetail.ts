import styled from "@emotion/styled";

const ProductDetailItem = {
  Container: styled.div``,
  ImageSlider: styled.div`
    width: 100%;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    display: flex;
    max-height: 500px;
    -ms-overflow-style: none;
    scrollbar-width: none;
    img {
      scroll-snap-align: start;

      min-width: 100vw;
      object-fit: contain;
      flex-basis: 100vw;
    }
  `,
};

export default ProductDetailItem;
