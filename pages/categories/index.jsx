import FoodCard from "@/components/modules/FoodCard";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";

const Categories = ({ data }) => {
  console.log(data);
  const { push } = useRouter();
  const [value, setValue] = useState({
    difficulty: "",
    time: "",
  });
  const handleValue = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  const handleSearch = () => {
    push({
      pathname: "/categories",
      query: value,
    });
  };
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:space-x-5 sm:space-y-0 sm:justify-center sm:mt-28 sm:mb-10 m-3 space-y-5">
        <select
          onChange={handleValue}
          name="difficulty"
          className="cursor-pointer shadow-md text-slate-500 rounded-md p-3 shadow-slate-200 text-sm outline-none"
        >
          <option value="">Difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
        <select
          onChange={handleValue}
          name="time"
          className="cursor-pointer shadow-md text-slate-500 rounded-md p-3 shadow-slate-200 text-sm outline-none"
        >
          <option value="">Cooking Time</option>
          <option value="more">More than 30 mins</option>
          <option value="less">Less than 30 mins</option>
        </select>
        <button
          onClick={handleSearch}
          className="bg-green-100 text-green-600 sm:px-5 py-2 text-sm rounded-md flex items-center justify-center"
        >
          <IoSearch className="mr-2" /> Search
        </button>
      </div>
      {data.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-7 lg:my-10 gap-5 m-3">
          {data.map((item) => (
            <FoodCard key={item.id} {...item} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center p-5">
          <img src="/images/search.png" />
        </div>
      )}
    </div>
  );
};

export default Categories;

export async function getServerSideProps(context) {
  const {
    query: { time, difficulty },
  } = context;
  const res = await fetch(`https://food-api-ashen.vercel.app/data`);
  const data = await res.json();
  const filteredData = data.filter((item) => {
    const timeResult = +item.details[4].CookingTime.split(" ")[0];
    const difficultyResult = item.details[2].Difficulty;
    if (
      time === "less" &&
      timeResult <= 30 &&
      difficultyResult === difficulty
    ) {
      return item;
    } else if (
      time === "more" &&
      timeResult > 30 &&
      difficultyResult === difficulty
    ) {
      return item;
    } else if (time === "less" && timeResult <= 30 && difficulty === "") {
      return item;
    } else if (time === "more" && timeResult > 30 && difficulty === "") {
      return item;
    } else if (time === "" && difficultyResult === difficulty) {
      return item;
    }
  });
  return {
    props: { data: filteredData },
  };
}
