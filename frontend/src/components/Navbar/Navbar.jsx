import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");


  const { getTotalCartAmount,token,setToken } = useContext(StoreContext);

  return (
    <div className="navbar flex justify-between items-center">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo w-[10vw]" />
      </Link>
      <ul className="navbar-menu flex list-none gap-8 text-lg text-gray-600">
        <Link
          to="/"
          className={`cursor-pointer ${
            menu === "home" ? "text-orange-500" : ""
          }`}
          onClick={() => setMenu("home")}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          className={`cursor-pointer ${
            menu === "menu" ? "text-orange-500" : ""
          }`}
          onClick={() => setMenu("menu")}
        >
          Menu
        </a>
        <a
          href="#app-download"
          className={`cursor-pointer ${
            menu === "mobile-app" ? "text-orange-500" : ""
          }`}
          onClick={() => setMenu("mobile-app")}
        >
          Mobile App
        </a>
        <a
          href="#footer"
          className={`cursor-pointer ${
            menu === "contact-us" ? "text-orange-500" : ""
          }`}
          onClick={() => setMenu("contact-us")}
        >
          Contact Us
        </a>
      </ul>
      <div className="navbar-right flex items-center gap-[40px]">
        <i className="text-3xl ri-search-2-line"></i>
        <div className="navbar-search-icon relative">
          <Link to="/cart">
            <i className="text-3xl ri-shopping-cart-2-fill"></i>
          </Link>
          <div
            className={
              getTotalCartAmount() === 0
                ? ""
                : "dot absolute bg-red-500 w-[9px] h-[10px] top-[23%] right-[-18%] rounded-full"
            }
          ></div>
        </div>
       {!token?<button onClick={() => setShowLogin(true)} className="bg-transparent text-[#49577e] px-4 py-2 border border-blue-500 rounded-md hover:bg-[#fff4f2] hover:text-black transition duration-300 ease-in-out rounded-[50px]">Sign in</button>:<div className="navbar-profile">
        <img src={assets.parcel_icon} alt=""/>
        <ul className="nav-profile-dropdown">
          <li><img src={assets.bag_icon} alt=""/><p>Orders</p></li>
          <hr />
          <li><img src={assets.logout_icon} alt=""/><p>Logout</p></li>
        </ul>
        </div>}
      </div>
    </div>
  );
};

export default Navbar;
