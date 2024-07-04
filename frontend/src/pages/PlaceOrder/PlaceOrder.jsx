import { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } =
    useContext(StoreContext);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandlar = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    };
    let response = await axios.post(url + "/api/order/place", orderData, {
      headers: { token },
    });
    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    } else {
      alert("Error");
    }
  };

  return (
    <form
      onSubmit={placeOrder}
      className="place-order flex items-start justify-between gap-[50px] mt-[100px]"
    >
      <div className="place-order-left w-[100%]">
        <p className="title text-[30px] font-semibold mb-[50px]">
          Delivery Information
        </p>
        <div className="multi-fields flex gap-[10px]">
          <input
            className="mb-[15px] w-[100%] p-[10px] border border-gray-300 rounded-md focus:outline-tomato"
            type="text"
            required
            name="firstName"
            onChange={onChangeHandlar}
            value={data.firstName}
            placeholder="Frist name"
          />
          <input
            className="mb-[15px] w-[100%] p-[10px] border border-gray-300 rounded-md focus:outline-tomato"
            type="text"
            required
            name="lastName"
            onChange={onChangeHandlar}
            value={data.lastName}
            placeholder="Last name"
          />
        </div>
        <input
          className="mb-[15px] w-[100%] p-[10px] border border-gray-300 rounded-md focus:outline-tomato"
          type="email
            required"
          name="email"
          onChange={onChangeHandlar}
          value={data.email}
          placeholder="Email address"
        />
        <input
          className="mb-[15px] w-[100%] p-[10px] border border-gray-300 rounded-md focus:outline-tomato"
          type="text"
          required
          name="street"
          onChange={onChangeHandlar}
          value={data.street}
          placeholder="Streat"
        />
        <div className="multi-fields flex gap-[10px]">
          <input
            className="mb-[15px] w-[100%] p-[10px] border border-gray-300 rounded-md focus:outline-tomato"
            type="text"
            required
            name="city"
            onChange={onChangeHandlar}
            value={data.city}
            placeholder="City"
          />
          <input
            className="mb-[15px] w-[100%] p-[10px] border border-gray-300 rounded-md focus:outline-tomato"
            type="text"
            required
            name="state"
            onChange={onChangeHandlar}
            value={data.state}
            placeholder="State"
          />
        </div>
        <div className="multi-fields flex gap-[10px]">
          <input
            className="mb-[15px] w-[100%] p-[10px] border border-gray-300 rounded-md focus:outline-tomato"
            type="text"
            required
            name="zipcode"
            onChange={onChangeHandlar}
            value={data.zipcode}
            placeholder="Zip code"
          />
          <input
            className="mb-[15px] w-[100%] p-[10px] border border-gray-300 rounded-md focus:outline-tomato"
            type="text"
            required
            name="country"
            onChange={onChangeHandlar}
            value={data.country}
            placeholder="Country"
          />
        </div>
        <input
          className="mb-[15px] w-[100%] p-[10px] border border-gray-300 rounded-md focus:outline-tomato"
          type="text"
          required
          name="phone"
          onChange={onChangeHandlar}
          value={data.phone}
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
              <p>₹{getTotalCartAmount() === 0 ? 0 : 10}</p>
            </div>
            <hr className="my-[10px]" />
            <div className="cart-total-details flex justify-between text-[#555]">
              <b>Total</b>
              <b>
                ₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 10}
              </b>
            </div>
          </div>
          <button
            type="submit"
            className="border-none text-white bg-[#FA853C] w-[max(15vw,200px)] py-[12px] rounded-lg text-sm mt-[45px]"
          >
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
