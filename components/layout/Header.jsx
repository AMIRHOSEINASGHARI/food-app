import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className=" shadow-md shadow-slate-200">
      <div className="flex items-center justify-between p-3 md:px-3 md:py-5 max-w-[1200px] mx-auto">
        <Link href="/" className="font-black text-green-500 text-sm md:text-xl">
          <img src="/images/logo.svg" className="w-8 sm:w-14" alt="logo" />
        </Link>
        <ul className="flex items-center justify-center space-x-3 md:space-x-5 text-[10px] md:text-[16px]">
          <li>
            <Link
              className="hover:text-green-500 transition duration-100 ease-in-out"
              href="/menu"
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-green-500 transition duration-100 ease-in-out"
              href="/categories"
            >
              Categories
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
