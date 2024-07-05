import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { assets } from "../../assets/assets";

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fatchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } }
    );
    setData(response.data.data);
    console.log(response.data.data);
  };
  useEffect(() => {
    if (token) {
      fatchOrders();
    }
  }, [token]);

  return (
    <div className="my-orders my-10">
      <h2>My Orders</h2>
      <div className="container flex flex-col gap-[20px] mt-[30px]">
        {data.map((order, index) => {
          return (
            <div
              key={index}
              className="my-orders-order grid grid-cols-2 md:grid-cols-6 items-center gap-[23px] text-[15px] px-[10px] py-[20px] text-[#454545] border-2 border-[#E56C14]"
            >
              <img className="w-[50px]" src={assets.parcel_icon} alt="" />
              <p className="">
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + " , ";
                  }
                })}
              </p>
              <p>₹{order.amount}.00</p>
              <p>Items: {order.items.length}</p>
              <p>
                <span className="text-[#E56C14]">&#x25cf;</span>
                <b className="font-medium">{order.status}</b>
              </p>
            <button className="border-none py-[10px] px-[0px] rounded-md bg-[#ffe1e1] text-[#454545]">Track Order</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyOrders;
