import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../../assets/assets";

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(url + "/api/order/list");
      if (response.data.success) {
        setOrders(response.data.data);
        console.log(response.data.data);
      } else {
        toast.error("Error fetching orders");
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      toast.error("Error fetching orders");
    }
  };

  const statusHandlar = async (event, orderId) => {
    const response = await axios.post(url + "/api/order/status", {
      orderId,
      status: event.target.value,
    });
    if(response.data.success){
      await fetchAllOrders()
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="order w-[70%] ml-[5vw] mt-[50px] text-[16px] text-[#6d6d6d]">
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((order, index) => (
          <div
            key={index}
            className="order-item grid grid-cols-2 md:grid-cols-5 items-start gap-[23px] text-[14px] p-[20px] text-[#454545] my-8 border-2 border-[#E56C14]"
          >
            <img src={assets.parcel_icon} alt="" />
            <div>
              <p className="order-item-food font-semibold">
                {order.items.map((item, index) =>
                  index === order.items.length - 1
                    ? `${item.name} x ${item.quantity}`
                    : `${item.name} x ${item.quantity}, `
                )}
              </p>
              <p className="order-item-name font-semibold	mt-[30px] mb-[5px]">
                {order.address.firstName} {order.address.lastName}
              </p>
              <div className="order-items-address mb-[10px]">
                <p>{order.address.street}, </p>
                <p>
                  {order.address.city}, {order.address.state},{" "}
                  {order.address.country}, {order.address.zipcode},{" "}
                </p>
              </div>
              <p className="oder-item-phone">{order.address.phone}</p>
            </div>
            <p>Items: {order.items.length}</p>
            <p>₹{order.amount}</p>
            <select
              onChange={(event) => statusHandlar(event, order._id)}
              value={order.status}
              className="bg-[#ffe8e4] border-[1px] border-2 border-[#E56C14] max-w-[10vw] md:min-w-[5px] p-[10px] outline-none"
            >
              <option value="food processing">Food Processing</option>
              <option value="Out for delivery">Out for Delivery</option>
              <option value="delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
