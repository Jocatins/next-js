import { useRouter } from "next/router";

function ProductDetails() {
  const router = useRouter();
  const productId = router.query.productId;
  return <h3>Product Details {productId}</h3>;
}
export default ProductDetails;
