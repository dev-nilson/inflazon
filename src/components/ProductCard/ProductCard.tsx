import { IconStarFilled, IconStar } from "@tabler/icons-react";

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  return (
    <div>
      <img src={product.image} width={200} height={200} alt={product.title} />
      <h4>{product.title}</h4>
      <IconStarFilled />
      <IconStar />
    </div>
  );
}

export default ProductCard;
