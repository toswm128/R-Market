import { PRODUCT_LIST } from "constants/queries";
import { useQuery } from "react-query";
import { ProductDataType } from "types/product";
import { customedAxios } from "util/customAxios";

export default function useProduct() {
  const getProductList = () => customedAxios.get<ProductDataType>("product");
  return useQuery(PRODUCT_LIST, () => getProductList(), {
    select: (data) => data.data,
  });
}
