import { IoIosArrowForward } from "react-icons/io";

const MainCategories = () => {
  return (
    <div>
      <div className="flex items-center justify-between gap-5 mt-3">
        <input
          type="text"
          className="bg-transparent border-2 border-blue-500 rounded-l-3xl h-12 px-4 text-white outline-none placeholder:text-white"
          placeholder="Your email address"
        />
        <button className="rounded-r-3xl px-4 h-12 bg-blue-500 text-white flex items-center gap-4 hover:bg-blue-400">
          Get Started
          <IoIosArrowForward></IoIosArrowForward>
        </button>
      </div>
    </div>
  );
};

export default MainCategories;
