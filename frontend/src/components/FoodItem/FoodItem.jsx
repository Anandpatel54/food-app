import { useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item w-full mx-auto rounded-md shadow-md transition duration-300 ease-in-ou">
      <div className="food-item-img-container relative">
        <img
          className="food-item-image w-full rounded-t-md"
          src={image}
          alt=""
        />
        {!cartItems[id] ? (
          <img
            className="add absolute bottom-4 right-4 w-8 h-8 rounded-full cursor-pointer"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="food-item-counter flex absolute bottom-4 right-4 rounded-full items-center gap-2 p-2 bg-white text-black">
            <img
              className="w-6 h-6 cursor-pointer"
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p className="text-black">{cartItems[id]}</p>
            <img
              className="w-6 h-6 cursor-pointer"
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info p-4">
        <div className="food-item-name-rating flex justify-between items-center mb-2">
          <p className="font-semibold">{name}</p>
          <img className="w-24" src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc text-sm text-gray-600 mb-2">
          {description}
        </p>
        <p className="food-item-price text-orange-600 text-lg font-semibold">
          ₹{price}
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
