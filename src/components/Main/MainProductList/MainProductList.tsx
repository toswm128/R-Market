import useProduct from "hooks/queries/useProduct";
import MainProductListItem from "./StyledMainProductList";
import ProductCardList from "components/common/Product/ProductCardList/ProductCardList";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const MainProductList = () => {
  const { data, fetchNextPage } = useProduct();
  const { ref, inView } = useInView();

  useEffect(() => {
    inView && fetchNextPage();
  }, [inView]);

  return (
    <MainProductListItem.Container>
      {data &&
        data.pages.map((page, key) => (
          <ProductCardList key={key} products={page.data.products} />
        ))}
      <div ref={ref}></div>
    </MainProductListItem.Container>
  );
};

export default MainProductList;
