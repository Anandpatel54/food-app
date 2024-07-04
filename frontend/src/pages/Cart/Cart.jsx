import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } =
    useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="cart mt-4">
      <div className="cart-items bg-white shadow-lg rounded my-5">
        <h2 className="text-gray-800 text-lg font-semibold mb-[20px]">
          Cart Items
        </h2>
        <div className="cart-items-title grid grid-cols-6 gap-4 text-sm text-gray-700 items-center text-sm md">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="cart-items-title grid grid-cols-6 gap-4 text-sm text-gray-700 items-center text-sm md:text-base my-2 text-black w-[100%]">
                  <img
                    className="w-[70px] rounded-md"
                    src={url+"/images/"+item.image}
                    alt={item.name}
                  />
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>₹{item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)}>
                    <i className="ri-delete-bin-line text-red-600 cursor-pointer"></i>
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom flex mt-[80px] justify-between gap-[max(12vw,20px)]">
        <div className="cart-total flex-1 flex flex-col gap-[20px]">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details flex justify-between text-[#555]">
              <p>Sub Total</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr className="my-[10px]" />
            <div className="cart-total-details flex justify-between text-[#555]">
              <p>Delivery Charge</p>
              <p>₹{getTotalCartAmount()===0?0:20}</p>
            </div>
            <hr className="my-[10px]" />
            <div className="cart-total-details flex justify-between text-[#555]">
              <b>Total</b>
              <b>₹{getTotalCartAmount()===0?0:getTotalCartAmount() + 20}</b>
            </div>
          </div>
          <button
            onClick={() => navigate("/order")}
            className="border-none text-white bg-[#FA853C] w-[max(15vw,200px)] py-[12px] rounded-lg text-sm"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="cart-promocode flex-1">
          <div>
            <p className="text-[#555]">
              If you have a promo code, Enter it here
            </p>
            <div className="cart-promocode-input mt-2 flex justify-between items-center bg-gray-300 rounded-md">
              <input
                className="bg-transparent rounded-none outline-none pl-[10px]"
                type="text"
                placeholder="promo code"
              />
              <button className=" w-[max(10vw,150px)] py-[10px] px-[5px] bg-zinc-600 border-none text-white rounded-lg">
                APPLY
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
