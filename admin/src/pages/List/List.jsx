import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const List = ({url}) => {
  const [list, setList] = useState([]);

  const fatchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const removeFood = async (foodId) => {
    console.log(foodId);
    const response = await axios.post(`${url}/api/food/remove`,{id:foodId});
    await fatchList()
    if(response.data.success){
      toast.success(response.data.message)
    }
    else{
      toast.error("Error");
    }
  }

  useEffect(() => {
    fatchList();
  }, []);

  return (
    <div className="list add-col  w-[70%] ml-[5vw] mt-[50px] text-[16px] text-[#6d6d6d]">
      <p>All Food List</p>
      <div className="list-table">
        <div className="list-table-formet grid grid-cols-5 items-center gap-[10px] px-[12px] py-[15px] border-2 text-[13px]">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div
              key={index}
              className="list-table-formet grid grid-cols-5 items-center gap-[10px] px-[12px] py-[15px] border-2 text-[13px]"
            >
              <img
                className="w-[50px] rounded-md"
                src={`${url}/images/` + item.image}
                alt=""
              />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>₹{item.price}</p>
              <i onClick={()=> removeFood(item._id)} className="ri-delete-bin-line text-red-600 cursor-pointer"></i>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
