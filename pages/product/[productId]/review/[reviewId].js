import { useRouter } from "next/router";

function ReviewDetails() {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  return (
    <h3>
      Review details from {reviewId} of product {productId}
    </h3>
  );
}
export default ReviewDetails;
