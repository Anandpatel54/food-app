import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div
      className="app-download mx-auto my-auto mt-[100px] text-center text-2xl font-semibold"
      id="app-download"
    >
      <p>
        For Better Experience <br /> Food Hub
      </p>
      <div className="app-download-platforms flex justify-center gap-6 mt-8">
        <img
          className="w-[calc(25vw-120px)] max-w-[160px] transition duration-500 cursor-pointer transform hover:scale-110"
          src={assets.play_store}
          alt=""
        />
        <img
          className="w-[calc(25vw-120px)] max-w-[160px] transition duration-500 cursor-pointer transform hover:scale-110"
          src={assets.app_store}
          alt=""
        />
      </div>
    </div>
  );
};

export default AppDownload;
