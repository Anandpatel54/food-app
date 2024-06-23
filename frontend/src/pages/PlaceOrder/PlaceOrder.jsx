import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div className="place-order flex items-start justify-between gap-[50px] mt-[100px]">
      <div className="place-order-left w-[100%]">
        <p className="title text-[30px] font-semibold mb-[50px]">
          Delivery Information
        </p>
        <div className="multi-fields flex gap-[10px]">
          <input
            className="mb-[15px] w-[100%] p-[10px] border border-gray-300 rounded-md focus:outline-tomato"
            type="text"
            placeholder="Frist name"
          />
          <input
            className="mb-[15px] w-[100%] p-[10px] border border-gray-300 rounded-md focus:outline-tomato"
            type="text"
            placeholder="Last name"
          />
        </div>
        <input
          className="mb-[15px] w-[100%] p-[10px] border border-gray-300 rounded-md focus:outline-tomato"
          type="email"
          placeholder="Email address"
        />
        <input
          className="mb-[15px] w-[100%] p-[10px] border border-gray-300 rounded-md focus:outline-tomato"
          type="text"
          placeholder="Streat"
        />
        <div className="multi-fields flex gap-[10px]">
          <input
            className="mb-[15px] w-[100%] p-[10px] border border-gray-300 rounded-md focus:outline-tomato"
            type="text"
            placeholder="City"
          />
          <input
            className="mb-[15px] w-[100%] p-[10px] border border-gray-300 rounded-md focus:outline-tomato"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="multi-fields flex gap-[10px]">
          <input
            className="mb-[15px] w-[100%] p-[10px] border border-gray-300 rounded-md focus:outline-tomato"
            type="text"
            placeholder="Zip code"
          />
          <input
            className="mb-[15px] w-[100%] p-[10px] border border-gray-300 rounded-md focus:outline-tomato"
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          className="mb-[15px] w-[100%] p-[10px] border border-gray-300 rounded-md focus:outline-tomato"
          type="text"
          placeholder="Phone"
        />
      </div>
      <div className="place-order-right w-[100%] max-w-[max(40%,500px)] mt-[16px]">
        <div className="cart-total flex-1 flex flex-col gap-[20px]">
          <h2 className="font-semibold text-[30px]">Cart Totals</h2>
          <div>
            <div className="cart-total-details flex justify-between text-[#555] mt-4">
              <p>Sub Total</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr className="my-[10px]" />
            <div className="cart-total-details flex justify-between text-[#555]">
              <p>Delivery Charge</p>
              <p>₹{getTotalCartAmount()===0?0:10}</p>
            </div>
            <hr className="my-[10px]" />
            <div className="cart-total-details flex justify-between text-[#555]">
              <b>Total</b>
              <b>₹{getTotalCartAmount()===0?0:getTotalCartAmount() + 10}</b>
            </div>
          </div>
          <button className="border-none text-white bg-[#FA853C] w-[max(15vw,200px)] py-[12px] rounded-lg text-sm mt-[45px]">
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
