import { products } from "../../data";
import ProductCard from "../ProductCard/ProductCard";

function ProductFeed() {
  console.log(products);

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductFeed;
