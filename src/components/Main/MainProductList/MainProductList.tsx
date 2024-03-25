import useProduct from "hooks/queries/useProduct";
import MainProductListItem from "./StyledMainProductList";
import ProductCardList from "components/common/Product/ProductCardList/ProductCardList";

const MainProductList = () => {
  const { data } = useProduct();

  return (
    <MainProductListItem.Container>
      <ProductCardList products={data?.products} />
    </MainProductListItem.Container>
  );
};

export default MainProductList;
