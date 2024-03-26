import styled from "@emotion/styled";
import Header from "components/common/Header/Header";
import ProductDetail from "components/common/Product/ProductDetail";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const productId = useParams().id;

  return (
    <ProductDetailPageItem.Container>
      <Header />
      {productId && <ProductDetail productId={productId} />}
    </ProductDetailPageItem.Container>
  );
};

const ProductDetailPageItem = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
  `,
};

export default ProductDetailPage;
