import Link from "next/link";
import React from "react";

const FoodCard = ({ id, name, discount, price }) => {
  return (
    <div
      key={id}
      className="p-3 rounded-md shadow-xl shadow-slate-200 hover:shadow-2xl hover:shadow-slate-300 transition duration-150 ease-in-out relative"
    >
      <img className="rounded-md" src={`/images/${id}.jpeg`} />
      <h1 className="mt-3 font-bold text-green-500">{name}</h1>
      {discount ? (
        <div className="space-x-2 my-2">
          <span className="text-red-500 bg-red-100 rounded-md px-2 line-through">
            $ {price}
          </span>
          <span className="text-green-500 bg-green-100 rounded-md px-2 font-bold">
            $ {(price * ((100 - discount) / 100)).toFixed(1)}
          </span>
        </div>
      ) : (
        <p className="my-2 text-green-500 font-bold bg-green-100 rounded-md px-2 w-fit">
          $ {price}
        </p>
      )}
      <hr className="mb-2" />
      <Link href={`/menu/${id}`}>
        <p className="bg-green-100 text-green-600 hover:bg-green-200 transition duration-150 ease-in-out py-2 text-sm rounded-md w-full text-center">
          See Details
        </p>
      </Link>
      {discount > 0 && (
        <span className="absolute top-5 right-5 bg-red-600 text-white text-xs font-bold border-2 w-9 h-9 flex items-center justify-center rounded-full">
          -{discount}%
        </span>
      )}
    </div>
  );
};

export default FoodCard;
