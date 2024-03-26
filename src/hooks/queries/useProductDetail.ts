import { PRODUCT_DETAIL } from "constants/queries";
import { useQuery } from "react-query";
import { ProductType } from "types/product";
import { customedAxios } from "util/customAxios";

const getProductDetail = (targetId: string | number) =>
  customedAxios.get<ProductType>("product/" + targetId);

export default function useProductDetail(targetId: string | number) {
  return useQuery(
    [PRODUCT_DETAIL, targetId],
    () => getProductDetail(targetId),
    {
      select: (data) => data.data,
    }
  );
}
