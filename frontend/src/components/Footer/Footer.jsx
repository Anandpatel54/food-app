
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="footer bg-[#323232] text-[#d9d9d9] pt-20 pb-10 flex flex-col gap-[20px] mt-[100px]">
      <div className="footer-content mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        
          <div className="footer-content-left flex flex-col items-start gap-[20px]">
            <img className="w-20" src={assets.logo} alt="Logo" />
            <p className="mt-4 max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur incidunt maxime nostrum earum voluptate,
              exercitationem molestiae veritatis quas voluptatem dolorem?
            </p>
            <div className="footer-social-icons mt-4 flex gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src={assets.facebook_icon}
                  alt="Facebook"
                  className="w-6 h-6"
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src={assets.twitter_icon}
                  alt="Twitter"
                  className="w-6 h-6"
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src={assets.linkedin_icon}
                  alt="LinkedIn"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>

          <div className="footer-content-center flex flex-col items-start gap-[20px]">
            <h2 className="text-white mb-4">COMPANY</h2>
            <ul className="text-gray-400">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Delivery</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>

       
          <div className="footer-content-right flex flex-col items-start gap-[20px]">
            <h2 className="text-white mb-4">GET IN TOUCH</h2>
            <ul className="text-gray-400">
              <li>7000686128</li>
              <li>
                <a href="mailto:FoodHub@gmail.com">FoodHub@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-600 my-6" />

        <p className="text-center text-gray-400">
          &copy; {new Date().getFullYear()} FoodHub.com - All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
