import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className=" relative z-40">
      <nav className="flex py-6 items-center justify-between container mx-auto">
        <img src="/Logo.png" alt="" />
        <div>
          <IoMenu
            onClick={() => setOpen(!open)}
            className="md:hidden font-medium text-4xl mr-2"
          ></IoMenu>
          <ul
            className={`absolute right-2 grid text-right duration-100 z-50 ${
              open
                ? "top-20 bg-base-200 md:bg-white rounded space-y-2"
                : "-top-60"
            } md:static md:flex md:gap-5 py-2 font-medium text-lg px-2`}
          >
            <NavLink
              className={({ isActive }) =>
                isActive ? "underline text-rose-500 font-bold" : " "
              }
              to={"/"}
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "underline text-rose-500 font-bold" : " "
              }
              to={"/donation"}
            >
              Donation
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "underline text-rose-500 font-bold" : " "
              }
              to={"/statistics"}
            >
              Statistics
            </NavLink>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
