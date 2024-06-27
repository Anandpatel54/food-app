import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar w-[18%] min-h-[100vh] border-2 border-gray-400 border-t-0">
      <div className="side-bar-options pt-[50px] pl-[20px] flex flex-col gap-[20px] text-base md:text-[1.2vw]">
        <NavLink
          to="/add"
          className="sidebar-option flex items-center gap-[12px] border-[1px] border-gray-400 border-r-0 px-[8px] py-[10px] rounded-md cursor-pointer"
        >
          <img src={assets.add_icon} alt="" />
          <p>Add Items</p>
        </NavLink>
        <NavLink
          to="/list"
          className="sidebar-option flex items-center gap-[12px] border-[1px] border-gray-400 border-r-0 px-[8px] py-[10px] rounded-md cursor-pointer"
        >
          <img src={assets.order_icon} alt="" />
          <p>List Items</p>
        </NavLink>
        <NavLink
          to="/orders"
          className="sidebar-option flex items-center gap-[12px] border-[1px] border-gray-400 border-r-0 px-[8px] py-[10px] rounded-md cursor-pointer"
        >
          <img src={assets.order_icon} alt="" />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
