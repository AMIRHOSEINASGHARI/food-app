import Link from "next/link";
import React from "react";

const LandingPage = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse items-center justify-between w-full p-3 space-y-2">
      <img src="/images/banner.png" alt="banner" className="md:w-2/3" />
      <div>
        <h1 className="border-b-2 mb-3 font-bold text-green-600 w-fit md:text-2xl xl:text-5xl border-green-500">
          BotoFood
        </h1>
        <h2 className="capitalize mb-2 font-semibold text-sm">
          food delivery and takeout!
        </h2>
        <p className="leading-tight text-sm md:text-base mb-5 ">
          BotoFood is an online food ordering and delivery platform launched by
          Uber in 2014. Meals are delivered by couriers using cars, scooters,
          bikes, or on foot.
        </p>
        <Link
          className="bg-green-100 rounded-md px-5 py-2 capitalize font-bold text-green-600 text-sm lg:text-xl"
          href="/menu"
        >
          see all
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
