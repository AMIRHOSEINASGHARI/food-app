import React from "react";
import FoodCard from "../modules/FoodCard";

const MenuPage = ({ menu }) => {
  console.log(menu);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-7 lg:my-10 gap-5 m-3">
      {menu.map((item) => {
        return <FoodCard key={item.id} {...item} />;
      })}
    </div>
  );
};

export default MenuPage;
