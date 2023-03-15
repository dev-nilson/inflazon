import { useDispatch } from "react-redux";
import Image from "next/image";
import Currency from "react-currency-formatter";
import { IconStarFilled, IconStar } from "@tabler/icons-react";
import { addItem } from "@/redux/slices/cartSlice";

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  const dispatch = useDispatch();
  const stars = [
    <IconStarFilled key={product.id} />,
    <IconStar key={product.id} />,
  ];

  const handleClick = () => {
    dispatch(addItem(product));
  };

  const rating = Math.floor(Math.random() * 5) + 1;
  const starRating = Array(5).fill(<IconStar size={18} />);
  starRating.fill(<IconStarFilled size={18} />, 0, rating);

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 rounded-sm border-2 border-[#f7f7f7]">
      <Image className="w-full" src={product.image} alt={product.title} />
      <h3 className="text-md px-2 pt-2 pb-1">{product.title}</h3>
      <div className="flex px-2">
        {starRating.map((icon, index) => (
          <span className="text-amazonYellow-dark" key={index}>
            {icon}
          </span>
        ))}
      </div>
      <div className="text-2xl p-3 font-semibold">
        <Currency quantity={product.newPrice} currency="USD" />
        <small className="text-sm line-through text-gray-500 font-normal mx-2">
          <Currency quantity={product.oldPrice} currency="USD" />
        </small>
      </div>
      <button className="mt-10 mb-3 mx-3 button" onClick={handleClick}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
