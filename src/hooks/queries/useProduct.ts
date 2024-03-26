import { PRODUCT_LIST } from "constants/queries";
import { useQuery } from "react-query";
import { ProductListDataType } from "types/product";
import { customedAxios } from "util/customAxios";

const getProductList = () => customedAxios.get<ProductListDataType>("product");

export default function useProduct() {
  return useQuery(PRODUCT_LIST, () => getProductList(), {
    select: (data) => data.data,
  });
}
