import styled from "@emotion/styled";
import SearchProductList from "components/Search/SearchProductList";
import Header from "components/common/Header/Header";

const ProductSearchPage = () => {
  return (
    <ProductSearchPageItem.Container>
      <Header />
      <SearchProductList />
    </ProductSearchPageItem.Container>
  );
};

const ProductSearchPageItem = {
  Container: styled.div``,
};

export default ProductSearchPage;
