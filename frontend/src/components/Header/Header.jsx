import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <div className="header-container h-[34vw] m-[30px] mx-auto relative">
      <img className="header-img w-full h-full object-cover" src={assets.header_img} alt="Delicious food" />
      <div className="header-content absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center p-4">
        <h2 className="text-4xl font-bold mb-4">Order your favourite food here</h2>
        <p className="mb-4 max-w-xl">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <button className="px-6 py-2 bg-red-500 rounded-full text-white hover:bg-red-600 transition">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
