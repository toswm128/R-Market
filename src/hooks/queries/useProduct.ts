import { PRODUCT_LIST } from "constants/queries";
import { useQuery } from "react-query";
import { customedAxios } from "util/customAxios";

export default function useProduct() {
  const getProductList = () => customedAxios.get("product");
  return useQuery(PRODUCT_LIST, () => getProductList());
}
