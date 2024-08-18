import { appleImg, searchImg } from "../utils";

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Apple" width={14} height={18} />
        <div className="flex flex-1 justify-center max-sm:hidden">
          {["Mac", "iPad", "iPhone", "Support", "Where To Buy"].map((item) => {
            return (
              <div
                key={item}
                className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
              >
                {item}
              </div>
            );
          })}
        </div>
        <div className="flex max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="Search" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
