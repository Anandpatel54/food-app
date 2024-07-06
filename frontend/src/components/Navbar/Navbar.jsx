import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { token, setToken, cartCount } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };
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
          {cartCount > 0 && (
            <div className="dot absolute bg-red-500 w-3  h-4 top-0 right-[-20%] rounded-full flex items-center justify-center text-white text-xs">
              {cartCount}
            </div>
          )}
        </div>
        {!token ? (
          <button
            onClick={() => setShowLogin(true)}
            className="bg-transparent text-[#49577e] px-4 py-2 border border-blue-500 rounded-md hover:bg-[#fff4f2] hover:text-black transition duration-300 ease-in-out rounded-[50px]"
          >
            Sign in
          </button>
        ) : (
          <div className="navbar-profile relative">
            <i className="ri-user-3-fill text-3xl cursor-pointer"></i>
            <ul className="nav-profile-dropdown absolute hidden right-0">
              <li
                onClick={()=> navigate("/myorders")}
                className="flex items-center justify-center gap-[10px] cursor-pointer"
              >
                <img className="w-[20px]" src={assets.bag_icon} alt="" />
                <p className="text-[15px]">Orders</p>
              </li>
              <hr />
              <li
                onClick={logout}
                className="flex items-center justify-center gap-[10px] cursor-pointer"
              >
                <img className="w-[20px]" src={assets.logout_icon} alt="" />
                <p className="text-[15px]">Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
