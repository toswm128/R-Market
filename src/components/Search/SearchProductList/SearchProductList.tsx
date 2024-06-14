import SearchProductListItem from "./StyledSearchProductList";
import ProductCardList from "components/common/Product/ProductCardList/ProductCardList";
import useProductSearch from "hooks/queries/useProductSearch";
import { useParams } from "react-router-dom";

const SearchProductList = () => {
  const productText = useParams().text;
  const { data } = useProductSearch(productText || "");

  return (
    <SearchProductListItem.Container>
      {data?.products.length !== 0 ? (
        <SearchProductListItem.ListWrapper>
          <div className="search_text">
            "<b>{productText}</b>
            "에 대한 검색결과
          </div>
          {/* <ProductCardList products={data?.products} /> */}
        </SearchProductListItem.ListWrapper>
      ) : (
        <SearchProductListItem.Error>
          <div>
            검색하신 "{productText}"에 대해 검색한 결과를 찾을 수 없습니다.
          </div>
        </SearchProductListItem.Error>
      )}
    </SearchProductListItem.Container>
  );
};

export default SearchProductList;
