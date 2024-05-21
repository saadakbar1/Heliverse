
import maLogo from "../../assets/MotionArtEffect-logo.png";
import navImg from "../../assets/marklogo.svg";

const Navbar = () => {
  return (
    <>
      {/* Second Navigation Bar */}
      <div className="justify-start w-full h-10 z-30 flex flex-row  items-center px-6 py-10">
        <div className="flex-1 px-2">
          <a className="text-xl">
            <img className="w-40 h-6" src={navImg} alt="Nav Logo" />
          </a>
        </div>
        <div className="flex-none py-14 px-2">
          <button className="bg-[#82B440] lg:w-24 h-10 text-sm text-white font-Sora rounded-md shadow-2xl">
            Buy Now
          </button>
        </div>
      </div>

      {/* First Navigation Bar */}
      <nav className="font-outfit w-full">
        <div className="max-w-[1280px] mx-auto flex justify-between items-center px-3 h-20 pt-5">
          <img src={maLogo} alt="MotionArt Effect" />
          <button className="px-9 py-4 rounded-md bg-white max-lg:hidden hover:bg-transparent border-2 border-white hover:text-white pointer-events-auto font-bold">
            Purchase Now
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
