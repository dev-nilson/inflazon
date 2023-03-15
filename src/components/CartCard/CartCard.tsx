import Image from "next/image";
import Currency from "react-currency-formatter";

type CartCardProps = {
  item: Product;
};

function CartCard({ item }: CartCardProps) {
  return (
    <div className="grid grid-cols-5">
      <Image src={item.image} alt={item.title} />
      <div className="col-span-3 mx-5">
        <p>{item.title}</p>
        <Currency quantity={item.newPrice} currency="USD" />
      </div>
      <div className="flex flex-col justify-self-end justify-center">
        <button className="button">Remove from Cart</button>
      </div>
    </div>
  );
}

export default CartCard;
