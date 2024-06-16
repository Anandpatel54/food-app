import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu flex flex-col gap-[20px]" id="explore-menu">
      <h1 className="text-[#262626] font-semibold text-2xl mt-8">
        Explore Our Menu
      </h1>
      <p className="text-[#262626] max-w-[62%] text-sm">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satify your cravings and elevate your dining experience,
        one delicious meal at a time
      </p>
      <div className="explore-menu-list flex justify-between items-center gap-[45px] text-center overflow-x-scroll">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-item w-[7.5vw] min-w-[80px] rounded-full ease-in-out duration-300"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p className="mt-[10px] text-[#747474] text-[16px] cursor-pointer">
                {item.menu_name}{" "}
              </p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
