import Header from "@/components/Header/Header";
import React from "react";

function CartPage() {
  return (
    <div>
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        <section className="flex-grow m-5">
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-2xl font-semibold border-b pb-4">Order Details</h1>
          </div>
        </section>
        <section></section>
      </main>
    </div>
  );
}

export default CartPage;
