import { useSelector } from "react-redux";
import Currency from "react-currency-formatter";
import { selectItems } from "@/redux/slices/cartSlice";
import Header from "@/components/Header/Header";
import CartCard from "@/components/CartCard/CartCard";

function CartPage() {
  const items = useSelector(selectItems);

  return (
    <div>
      <Header />
      <main className="lg:flex max-w-screen-2xl">
        <section className="lg:w-3/4 m-5">
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-2xl font-semibold border-b pb-4">
              {items.length === 0 ? "Cart is Empty" : "Order Details"}
            </h1>
            {items.map((item: Product) => (
              <CartCard key={item.id} item={item} />
            ))}
          </div>
        </section>
        <section className="lg:w-1/4 m-5">
          {items.length > 0 && (
            <div className="flex flex-col bg-white p-5">
              <h2>Order Summary</h2>
              <span>
              </span>
              <button className="button">Place your order</button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default CartPage;
