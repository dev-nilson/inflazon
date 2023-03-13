import { products } from "../../data";
import ProductCard from "../ProductCard/ProductCard";

function ProductFeed() {
  console.log(products);

  return (
    <div className="grid grid-flow-row-dense sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:-mt-52">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductFeed;
