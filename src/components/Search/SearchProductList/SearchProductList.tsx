import SearchProductListItem from "./StyledSearchProductList";
import ProductCardList from "components/common/Product/ProductCardList/ProductCardList";
import useProductSearch from "hooks/queries/useProductSearch";
import { useParams } from "react-router-dom";

const SearchProductList = () => {
  const productText = useParams().text;
  const { data } = useProductSearch(productText || "");

  return (
    <SearchProductListItem.Container>
      <ProductCardList products={data?.products} />
    </SearchProductListItem.Container>
  );
};

export default SearchProductList;
