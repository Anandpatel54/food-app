import { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const Verify = () => {
  const [searchParams, setSearchParms] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const { url } = useContext(StoreContext);
  const navigate = useNavigate();

  const verifyPayment = async () => {
    const response = await axios.post(url + "/api/order/verify", {
      success,
      orderId,
    });
    if (response.data.success) {
      navigate("/myorders");
    } else {
      navigate("/");
    }
  };
  useEffect(() => {
    verifyPayment();
  }, []);

  return (
    <div className="verify min-h-[60vh] grid place-items-center">
      <div className="spinner w-[100px] h-[100px] border-[5px] solid #dadada border-tomato rounded-full animate-spin"></div>
      {success ? (
        <p>Verification successful!</p>
      ) : (
        <p>Verification failed or not provided.</p>
      )}
    </div>
  );
};

export default Verify;
