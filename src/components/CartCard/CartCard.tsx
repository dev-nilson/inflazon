import Image from "next/image";
import { useDispatch } from "react-redux";
import Currency from "react-currency-formatter";
import { removeItem } from "@/redux/slices/cartSlice";

type CartCardProps = {
  item: Product;
};

function CartCard({ item }: CartCardProps) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <div className="grid grid-cols-5 border rounded-sm p-4">
      <Image src={item.image} alt={item.title} />
      <div className="col-span-3 mx-5">
        <p className="text-lg">{item.title}</p>
        <div className="text-lg font-semibold text-red-600">
          <Currency quantity={item.newPrice} currency="USD" />
          <small className="text-sm line-through text-gray-500 font-normal mx-2">
            <Currency quantity={item.oldPrice} currency="USD" />
          </small>
        </div>
        <p className="text-sm font-semibold">Quantity: {item.quantity}</p>
      </div>
      <div className="flex flex-col justify-self-end justify-center">
        <button className="button" onClick={handleClick}>
          Remove from Cart
        </button>
      </div>
    </div>
  );
}

export default CartCard;
