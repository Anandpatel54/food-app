import {assets} from "../../assets/assets"

const Navbar = () => {
  return (
    <div className="navbar flex justify-between px-[30px] p-[10px]">
        <img className="logo max-w-[60px] md:max-w-[8%]" src={assets.logo} alt="" />
        <img className="profile max-w-[60px] md:max-w-[8%]]" src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar