import React from "react";

const Header = () => {
  return (
    <>
      <header className="w-full bg-blue-600 pt-5 pb-5">
        <ul className="flex gap-7 pl-15">
          <li className="text-stone-50 duration-100 hover:text-red-600 font-semibold cursor-pointer">
            Home
          </li>
          <li className="text-stone-50 duration-100 hover:text-red-600 font-semibold cursor-pointer">
            Business
          </li>
          <li className="text-stone-50 duration-100 hover:text-red-600 font-semibold cursor-pointer">
            Entertainment
          </li>
          <li className="text-stone-50 duration-100 hover:text-red-600 font-semibold cursor-pointer">
            General
          </li>
          <li className="text-stone-50 duration-100 hover:text-red-600 font-semibold cursor-pointer">
            Health
          </li>
          <li className="text-stone-50 duration-100 hover:text-red-600 font-semibold cursor-pointer">
            Science
          </li>
          <li className="text-stone-50 duration-100 hover:text-red-600 font-semibold cursor-pointer">
            Sports
          </li>
          <li className="text-stone-50 duration-100 hover:text-red-600 font-semibold cursor-pointer">
            Technology
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
