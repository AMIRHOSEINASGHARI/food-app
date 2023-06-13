import React from "react";
import { RxRocket } from "react-icons/rx";
import { IoRestaurantOutline } from "react-icons/io5";
import { GiChoice } from "react-icons/gi";
import { Tb24Hours } from "react-icons/tb";

const Attributes = () => {
  return (
    <div className="">
      <div className="w-full my-5 md:mt-10 flex items-center justify-center">
        <h1 className="font-black text-green-600 md:text-5xl border-b-2 border-green-500 w-fit">
          Why Us?
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 m-3">
        <div className="why-us-cards">
          <RxRocket className="text-green-600 text-xl md:text-3xl" />
          <span className="text-[10px] md:text-base font-light text-green-600">
            Fast
          </span>
        </div>
        <div className="why-us-cards">
          <IoRestaurantOutline className="text-green-600 text-xl md:text-3xl" />
          <span className="text-[10px] md:text-base font-light text-green-600">
            Best Restaurants
          </span>
        </div>
        <div className="why-us-cards">
          <GiChoice className="text-green-600 text-xl md:text-3xl" />
          <span className="text-[10px] md:text-base font-light text-green-600">
            Your Choice
          </span>
        </div>
        <div className="why-us-cards">
          <Tb24Hours className="text-green-600 text-xl md:text-3xl" />
          <span className="text-[10px]  md:text-base font-light text-green-600">
            24-7
          </span>
        </div>
      </div>
    </div>
  );
};

export default Attributes;
