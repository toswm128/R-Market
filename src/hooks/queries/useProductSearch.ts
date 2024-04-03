import { PRODUCT_SEARCH } from "constants/queries";
import { useQuery } from "react-query";
import { ProductListDataType } from "types/product";
import { customedAxios } from "util/customAxios";

const getProductSearch = (searchedText: string) =>
  customedAxios.get<ProductListDataType>("product/search?q=" + searchedText);

export default function useProductSearch(searchedText: string) {
  return useQuery(
    [PRODUCT_SEARCH, searchedText],
    () => getProductSearch(searchedText),
    {
      select: (data) => data.data,
    }
  );
}
