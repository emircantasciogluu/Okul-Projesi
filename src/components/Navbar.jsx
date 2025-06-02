import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  TbArrowBigRightLineFilled,
  TbArrowBigLeftLineFilled,
} from "react-icons/tb";
import { AuthContext } from "../AuthContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { token, logout } = useContext(AuthContext);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      <Link to={"/"} className="flex items-center gap-4 text-2xl font-bold">
        <img src="/Logo.png" alt="" className="w-8 h-8" />
        <span>TeamUp</span>
      </Link>

      <div className="md:hidden">
        <div
          className="cursor-pointer text-2xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <TbArrowBigRightLineFilled /> : <TbArrowBigLeftLineFilled />}
        </div>
        <div
          className={`w-full h-screen flex flex-col items-center justify-center absolute top-16 transition-all ease-in-out gap-8 font-medium text-lg bg-[#e6e6ff] ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          <Link to="/">Home</Link>
          <Link to="/postDetails">Posts</Link>
          {token ? (
            <>
              <Link to="/profile">
                <button className="bg-[#2A65B5] px-4 py-2 flex items-center justify-center gap-2 rounded-3xl text-white">
                  Profile
                </button>
              </Link>
              <button
                onClick={logout}
                className="bg-[#B52A2A] px-4 py-2 flex items-center justify-center gap-2 rounded-3xl text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className="bg-[#2A65B5] px-4 py-2 flex items-center justify-center gap-2 rounded-3xl text-white">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>

      <div className="hidden md:flex items-center justify-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Home</Link>
        <Link to="/postDetails">Posts</Link>
        {token ? (
          <>
            <Link to="/profile">
              <button className="bg-[#2A65B5] px-4 py-2 flex items-center justify-center gap-2 rounded-3xl text-white">
                Profile
              </button>
            </Link>
            <button
              onClick={logout}
              className="bg-[#B52A2A] px-4 py-2 flex items-center justify-center gap-2 rounded-3xl text-white"
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="bg-[#2A65B5] px-4 py-2 flex items-center justify-center gap-2 rounded-3xl text-white">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
