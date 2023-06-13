import React, { useState } from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { TbCurrencyDollar } from "react-icons/tb";
import { CiDiscount1 } from "react-icons/ci";
import { MdOutlineFastfood } from "react-icons/md";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

const FoodDetails = ({ food }) => {
  const [moreValue, setMoreValue] = useState(false);
  const [ing, setIng] = useState(false);
  const { id, name, details, discount, ingredients, introduction, price } =
    food;
  const boxingDetails = [
    { icon: <CiDiscount1 />, heading: "Discount", text: `${discount} %` },
    {
      icon: <TbCurrencyDollar />,
      heading: "Price",
      text: discount ? (price * ((100 - discount) / 100)).toFixed(1) : price,
    },
    {
      icon: <BiCurrentLocation />,
      heading: "Location",
      text: details[0].Cuisine,
    },
  ];
  return (
    <div className="my-8 p-3 flex flex-col items-center justify-center">
      <div className="flex flex-col sm:items-center justify-center sm:w-2/3 md:w-1/2">
        <img className="rounded-3xl" src={`/images/${id}.jpeg`} alt={name} />
        <div className="flex flex-col items-center w-full">
          <h1 className="font-bold text-green-600 bg-green-100 rounded-md py-1 px-4 text-xl my-3 md:my-10 md:text-3xl">
            {name}
          </h1>
          <p className="text-sm leading-tight text-justify mb-5">
            {introduction}
          </p>
          <div className="w-full space-y-3 sm:space-y-5">
            {boxingDetails.map((item, index) => {
              const { icon, heading, text } = item;
              return (
                <div
                  key={index}
                  className={`w-full flex items-center justify-between shadow-xl py-5 px-3 ${
                    heading === "Discount"
                      ? "text-red-500 bg-red-50"
                      : "text-green-500 bg-slate-50"
                  } rounded-md shadow-slate-200`}
                >
                  <div className="flex items-center space-x-2">
                    <div
                      className={`rounded-md p-1 ${
                        heading === "Discount" ? "bg-red-100" : "bg-green-100"
                      }`}
                    >
                      {icon}
                    </div>
                    <span className="text-sm">{heading}</span>
                  </div>
                  <span className="text-sm">{text}</span>
                </div>
              );
            })}
            <div
              className="cursor-pointer p-3 shadow-xl shadow-slate-200 rounded-md space-y-3"
              onClick={() => setMoreValue(!moreValue)}
            >
              <div className="hover:bg-slate-100 transition duration-150 ease-in-out flex items-center justify-between rounded-md p-1 text-slate-500 font-bold">
                <h1>More Details</h1>
                {!moreValue ? <TiArrowSortedDown /> : <TiArrowSortedUp />}
              </div>
              {moreValue && (
                <ul className="space-y-2 p-1">
                  {details.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-green-500">
                        {Object.keys(item)[0]}:
                      </span>
                      <span>{Object.values(item)[0]}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div
              className="cursor-pointer p-3 shadow-xl shadow-slate-200 rounded-md space-y-3"
              onClick={() => setIng(!ing)}
            >
              <div className="hover:bg-slate-100 transition duration-150 ease-in-out flex items-center justify-between rounded-md p-1 text-slate-500 font-bold">
                <h1>Ingredients</h1>
                {!ing ? <TiArrowSortedDown /> : <TiArrowSortedUp />}
              </div>
              {ing && (
                <div className="p-1 space-y-2 text-sm">
                  {ingredients.map((item, index) => (
                    <React.Fragment key={index}>
                      <div className="capitalize flex items-center space-x-2">
                        <span>{item}</span>
                      </div>
                      {index < ingredients.length - 1 && <hr />}
                    </React.Fragment>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;

export async function getStaticPaths() {
  const res = await fetch("https://food-api-ashen.vercel.app/data");
  const data = await res.json();
  const paths = data.map((item) => ({
    params: {
      menuID: `${item.id}`,
    },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const res = await fetch(
    `https://food-api-ashen.vercel.app/data/${context.params.menuID}`
  );
  const data = await res.json();
  return {
    props: {
      food: data,
    },
    revalidate: 10,
  };
}
