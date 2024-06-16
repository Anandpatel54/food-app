import { useState } from "react";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar flex justify-between items-center">
      <img src={assets.logo} alt="" className="logo w-[10vw]" />
      <ul className="navbar-menu flex list-none gap-8 text-lg text-gray-600">
        <li
          className={`cursor-pointer ${menu === "home" ? "text-orange-500" : ""}`}
          onClick={() => setMenu("home")}
        >
          Home
        </li>
        <li
          className={`cursor-pointer ${menu === "menu" ? "text-orange-500" : ""}`}
          onClick={() => setMenu("menu")}
        >
          Menu
        </li>
        <li
          className={`cursor-pointer ${
            menu === "mobile-app" ? "text-orange-500" : ""
          }`}
          onClick={() => setMenu("mobile-app")}
        >
          Mobile App
        </li>
        <li
          className={`cursor-pointer ${
            menu === "contact-us" ? "text-orange-500" : ""
          }`}
          onClick={() => setMenu("contact-us")}
        >
          Contact Us
        </li>
      </ul>
      <div className="navbar-right flex items-center gap-[40px]">
        <i className="text-3xl ri-search-2-line"></i>
        <div className="navbar-search-icon relative">
          <i className="text-3xl ri-shopping-cart-2-fill"></i>
          <div className="dot absolute min-w-[12px] min-h-[12px] bg-red-500 rounded-[5px] top-[-7px] right-[-6px]"></div>
        </div>
        <button className="bg-transparent text-[#49577e] px-4 py-2 border border-blue-500 rounded-md hover:bg-[#fff4f2] hover:text-black transition duration-300 ease-in-out rounded-[50px]">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
