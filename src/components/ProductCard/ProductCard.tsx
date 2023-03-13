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
    <div className="relative flex flex-col m-5 bg-white z-30">
      <img className="m-auto" src={product.image} width={200} height={200} alt={product.title} />
      <h3 className="text-md px-2 pt-2 pb-1">{product.title}</h3>
      <div className="flex px-2">
        {starRating.map((icon, index) => (
          <span className="text-amazonYellow-dark" key={index}>
            {icon}
          </span>
        ))}
      </div>
      <div className="text-2xl p-2 font-semibold">
        <Currency quantity={product.price} currency="USD" />
      </div>
      <button className="mt-auto mb-4 mx-4 button">Add to Cart</button>
    </div>
  );
}

export default ProductCard;
