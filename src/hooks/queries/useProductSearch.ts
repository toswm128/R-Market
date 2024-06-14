import { PRODUCT_SEARCH } from "constants/queries";
import { useInfiniteQuery, useQuery } from "react-query";
import { ProductListDataType } from "types/product";
import { customedAxios } from "util/customAxios";

const getProductSearch = async (searchedText: string, pageParam: number) => {
  const limit = 30;
  const skip = pageParam * limit;
  const { data } = await customedAxios.get<ProductListDataType>(
    `product/search?q=${searchedText}&limit=${limit}&skip=${skip}`
  );
  return { data, isLast: skip >= data.total, nextPage: pageParam + 1 };
};

export default function useProductSearch(searchedText: string) {
  return useInfiniteQuery(
    [PRODUCT_SEARCH, searchedText],
    ({ pageParam = 0 }) => getProductSearch(searchedText, pageParam),
    {
      getNextPageParam: (lastPage) => {
        if (!lastPage.isLast) return lastPage.nextPage;
        return undefined;
      },
    }
  );
}
