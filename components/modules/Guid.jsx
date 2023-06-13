import Link from "next/link";
import React from "react";

const Guid = () => {
  const guids = [
    {
      id: 1,
      text: "Sign in (or create an account) and set your delivery address.",
    },
    { id: 2, text: "Choose the restaurant you want to order from.." },
    { id: 3, text: "Select your items and tap “Add to Cart”" },
    { id: 4, text: "To place your order, select “View cart” or “Checkout”." },
    { id: 5, text: "Review your order and tap “Place Order”..." },
    { id: 6, text: "Track your order progress." },
  ];
  return (
    <div className="p-3 space-y-5">
      <h3 className="font-black text-green-600 text-lg border-b-2 border-green-600 w-fit">
        How to Order?
      </h3>
      <ul className="space-y-3">
        {guids.map((item) => (
          <li key={item.id} className="space-x-2">
            <span className="text-green-400 font-bold">{item.id}.</span>
            <span className="text-green-700">{item.text}</span>
          </li>
        ))}
      </ul>
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-3 xs:grid-cols-3">
        <Link
          href="/menu"
          className="why-us-cards text-sm text-green-600 border border-green-100 transition duration-200 ease-in-out hover:bg-green-100 py-5"
        >
          Menu
        </Link>
        <Link
          href="/categories"
          className="why-us-cards text-sm text-green-600 border border-green-100 transition duration-200 ease-in-out hover:bg-green-100 py-5"
        >
          Categories
        </Link>
        <button className="why-us-cards text-sm text-green-600 border border-green-100 transition duration-200 ease-in-out hover:bg-green-100 py-5">
          Disscount
        </button>
      </div>
    </div>
  );
};

export default Guid;
