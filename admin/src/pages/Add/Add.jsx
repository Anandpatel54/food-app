import { useState } from "react";
import { assets } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const Add = () => {
  const url = "http://localhost:4000";

  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "salad",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);
    const response = await axios.post(`${url}/api/food/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "salad",
      });
      setImage(false);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="add w-[70%] ml-[5vw] mt-[50px] text-[16px] text-[#6d6d6d]">
      <form onSubmit={onSubmitHandler} className="add-col gap-[20px]">
        <div className="add-img-upload add-col w-[120px]">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              className="w-[120px] rounden-lg"
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            className="p-[10px]"
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="add-product-name max-w-[280px] add-col">
          <p>Product name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            className="p-[10px] border-2"
            type="text"
            name="name"
            placeholder="Type here"
          />
        </div>
        <div className="add-product-description max-w-[280px] add-col">
          <p>Product Description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            className="p-[10px] border-2"
            name="description"
            rows="6"
            placeholder="Write content here"
            required
          ></textarea>
        </div>
        <div className="add-category-price flex gap-[30px]">
          <div className="add-category add-col">
            <p>Product Category</p>
            <select
              onChange={onChangeHandler}
              name="category"
              className="max-w-[120px] p-[10px] border-2"
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure veg">Pure veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodels">Noodels</option>
            </select>
          </div>
          <div className="add-price add-col">
            <p>Product price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              className="max-w-[120px] p-[10px] border-2"
              type="Number"
              name="price"
              placeholder="₹20"
            />
          </div>
        </div>
        <button
          type="submit"
          className="add-btn max-w-[120px] border-none p-[10px] bg-zinc-600 text-white cursor-pointer rounded-md"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
