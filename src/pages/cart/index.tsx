import { useSelector } from "react-redux";
import Currency from "react-currency-formatter";
import {
  selectItems,
  selectNewTotal,
  selectOldTotal,
} from "@/redux/slices/cartSlice";
import Header from "@/components/Header/Header";
import CartCard from "@/components/CartCard/CartCard";

function CartPage() {
  const items = useSelector(selectItems);
  const oldTotal = useSelector(selectOldTotal);
  const newTotal = useSelector(selectNewTotal);

  return (
    <div>
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        <section className="lg:w-3/4 flex-grow m-5">
          <div className="flex flex-col p-5 space-y-4 bg-white">
            <h1 className="text-2xl font-semibold border-b pb-4">
              {items.length === 0 ? "Cart is Empty" : "Order Details"}
            </h1>
            {items.map((item: Product) => (
              <CartCard key={item.id} item={item} />
            ))}
          </div>
        </section>
        <section className="lg:w-1/4 m-5">
          <div className="flex flex-col bg-white p-5">
            <div className="border-b pb-4">
              <button className="button w-full">Place your order</button>
            </div>
            <h2 className="font-semibold text-lg my-2">Order Summary</h2>
            <span className="text-sm">
              Total in 2023:&nbsp;&nbsp;&nbsp;
              <Currency quantity={oldTotal} currency="USD" />
            </span>
            <div className="border-t pt-2 mt-4">
              <span className="text-lg font-semibold text-red-600">
                Order Total:&nbsp;
                <Currency quantity={newTotal} currency="USD" />
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default CartPage;
