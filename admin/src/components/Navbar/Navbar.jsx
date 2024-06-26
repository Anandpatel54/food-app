import {assets} from "../../assets/assets"

const Navbar = () => {
  return (
    <div className="navbar flex justify-between px-[30px] py-[2%]">
        <img className="logo max-w-[80px] md:max-w-[10%]" src={assets.logo} alt="" />
        <img className="profile max-w-[80px] md:max-w-[10%]]" src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar