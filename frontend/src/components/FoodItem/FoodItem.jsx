import { assets } from "../../assets/assets";

const FoodItem = ({ id, name, price, description, image }) => {
  return (
    <div className="food-item w-full mx-auto rounded-md shadow-md transition duration-300 ease-in-ou">
      <div className="food-item-img-container">
        <img
          className="food-item-image w-full rounded-t-md"
          src={image}
          alt=""
        />
      </div>
      <div className="food-item-info p-[20px]">
        <div className="food-item-name-rating flex justify-between items-center mb-2">
          <p className="font-extrabold">{name}</p>
          <img className="" src={assets.rating_starts} alt="" />
        </div>
        <p className="text-sm">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
