import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const Login = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const [currState, setcurrState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currState === "login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }
    const response = await axios.post(newUrl, data);

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
       setShowLogin(false);
    } else {
      alert(response.data.message);
    }
  };

  return (
    <div className="login-popup absolute z-10 w-[100%] h-[100%] bg-[#00000090] grid">
      <form
        onSubmit={onLogin}
        className="login-popup-container place-self-center w-[max(23vw,330px)] text-[#808080] bg-white flex flex-col gap-[25px] px-[30px] py-[25px] rounded-md text-[14px]"
      >
        <div className="login-popup-title flex justify-between items-center text-black">
          <h2 className="font-extrabold text-[18px]">{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            className="w-[16px] cursor-pointer"
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs flex flex-col gap-[20px]">
          {currState === "Login" ? (
            <></>
          ) : (
            <input
              className="outline-none border-[1px] border-gray-300 p-[10px] rounded-md text-black"
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="Your Name"
              required
            />
          )}

          <input
            className="outline-none border-[1px] border-gray-300 p-[10px] rounded-md text-black"
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Your email"
            required
          />
          <input
            className="outline-none border-[1px] border-gray-300 p-[10px] rounded-md text-black"
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="password"
            required
          />
        </div>
        <button
          type="submit"
          className="border-none p-[10px] bg-[#E9721A] text-[15px] text-white rounded-md"
        >
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="login-popup condition flex items-start gap-[8px] mt-[-15px]">
          <input className="mt-[5px]" type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span
              className="cursor-pointer text-[#E9721A] font-bold"
              onClick={() => setcurrState("Sign Up")}
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Already have a account?{" "}
            <span
              className="cursor-pointer text-[#E9721A] font-bold"
              onClick={() => setcurrState("Login")}
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
