import { PRODUCT_LIST } from "constants/queries";
import { useInfiniteQuery } from "react-query";
import { ProductListDataType } from "types/product";
import { customedAxios } from "util/customAxios";

const useProduct = () => {
  const getProductList = async (pageParam: number) => {
    const limit = 30;
    const skip = pageParam * limit;
    const result = await customedAxios.get<ProductListDataType>(
      `product?limit=${limit}&skip=${skip}`
    );
    const { data } = result;
    return { data, isLast: skip >= data.total, nextPage: pageParam + 1 };
  };

  const query = useInfiniteQuery(
    [PRODUCT_LIST],
    ({ pageParam = 0 }) => getProductList(pageParam),
    {
      getNextPageParam: (lastPage) => {
        if (!lastPage.isLast) return lastPage.nextPage;
        return undefined;
      },
    }
  );

  return query;
};

export default useProduct;
