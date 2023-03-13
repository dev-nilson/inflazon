import Currency from "react-currency-formatter";
import { IconStarFilled, IconStar } from "@tabler/icons-react";

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  const stars = [
    <IconStarFilled key={product.id} />,
    <IconStar key={product.id} />,
  ];

  const rating = Math.floor(Math.random() * 5) + 1;

  const starRating = Array(5).fill(<IconStar />);
  starRating.fill(<IconStarFilled />, 0, rating);

  return (
    <div className="">
      <img src={product.image} width={200} height={200} alt={product.title} />
      <h4>{product.title}</h4>
      <div>
        {starRating.map((icon, index) => (
          <span key={index}>{icon}</span>
        ))}
      </div>
      <div>
          <Currency quantity={product.price} currency="USD" />
      </div>
    </div>
  );
}

export default ProductCard;
