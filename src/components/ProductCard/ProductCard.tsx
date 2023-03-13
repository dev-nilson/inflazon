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
    <div>
      <img src={product.image} width={200} height={200} alt={product.title} />
      <h4>{product.title}</h4>
      {starRating.map((icon, index) => (
        <span key={index}>{icon}</span>
      ))}
    </div>
  );
}

export default ProductCard;
