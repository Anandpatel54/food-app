import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <div className="header-container h-[34vw] mx-auto relative rounded-md">
      <img
        className="header-img w-full h-full object-cover rounded-md"
        src={assets.header_img}
        alt="Delicious food"
      />
      <div className="header-content absolute inset-0 top-[25%] left-[8%] gap-[0.8vw] max-w-[50%] flex flex-col items-start justify-center bg-opacity-50 text-white p-4">
        <h2 className="text-4xl font-semibold	mb-4 leading-tight">
          Order your <br /> favourite food here
        </h2>
        <p className="mb-4 max-w-xl">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <button className="px-6 py-2 bg-white rounded-full text-black hover:bg-gray-200 transition">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
