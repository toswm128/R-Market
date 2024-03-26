import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const productId = useParams().id;

  return (
    <div>
      <div>{productId}</div>
    </div>
  );
};

export default ProductDetailPage;
