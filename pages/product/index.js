import Link from "next/link";
import { useRouter } from "next/router";

function Product({ productId = 22 }) {
  const router = useRouter();
  const handleClick = () => {
    console.log("clicked order");
    router.push("/docs");
  };
  return (
    <>
      <Link href="/">
        <a>Back to Home</a>
      </Link>
      <h1>
        <Link href="/product/1">
          <a>Sphinx Products</a>
        </Link>
      </h1>

      <h1>
        <Link href="/product/2">
          <a> Joca Products</a>
        </Link>
      </h1>
      <h1>
        <Link href="/product/3" replace>
          <a> Titan Products</a>
        </Link>
      </h1>
      <h1>
        <Link href={`/product/${productId}`}>
          <a> Titan Products {productId}</a>
        </Link>
      </h1>
      <button onClick={handleClick}>Place your order</button>
    </>
  );
}
export default Product;
