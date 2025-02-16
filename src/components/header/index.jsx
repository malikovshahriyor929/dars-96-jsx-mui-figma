import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import logo from "../../assets/logo.svg";

import {
  DarkModeOutlined,
  GitHub,
  MenuOutlined,
  Search,
} from "@mui/icons-material";

const Header = () => {
  let [menu, setMenu] = useState(false);

  return (
    <div className="border-b   border-[#e8eaee] sticky top-0 left-0 w-full bg-white z-[999]">
      <nav className="w-[95%] max-w-[1440px] mx-auto py-4 flex items-center gap-5 justify-between  ">
        <div className="flex items-center gap-3 ">
          <NavLink to={"/"}>
            <img src={logo} alt="" />
          </NavLink>
          {menu ? (
            <div className="flex items-center gap-3 transition-all max-[850px]:fixed max-[850px]:w-full top-[67px] left-0 max-[850px]:bg-white max-[850px]:h-screen max-[850px]:flex-col  max-[850px]:p-7 max-[850px]:items-start ">
              <li className="text-[14px] text-[#303741] font-semibold list-none">
                <NavLink to={"/"}>Products</NavLink>
              </li>
              <li className="text-[14px] text-[#303741] font-semibold list-none">
                <NavLink to={"/"}>Docs</NavLink>
              </li>
              <li className="text-[14px] text-[#303741] font-semibold list-none">
                <NavLink to={"/"}>Pricing</NavLink>
              </li>
              <li className="text-[14px] text-[#303741] font-semibold list-none">
                <NavLink to={"/"}>About us</NavLink>
              </li>
              <li className="text-[14px] text-[#303741] font-semibold list-none">
                <NavLink to={"/"}>Blog</NavLink>
              </li>
            </div>
          ) : (
            <div className="flex items-center gap-3 transition-all max-[850px]:hidden ">
              <li className="text-[14px] text-[#303741] font-semibold list-none">
                <NavLink to={"/"}>Products</NavLink>
              </li>
              <li className="text-[14px] text-[#303741] font-semibold list-none">
                <NavLink to={"/"}>Docs</NavLink>
              </li>
              <li className="text-[14px] text-[#303741] font-semibold list-none">
                <NavLink to={"/"}>Pricing</NavLink>
              </li>
              <li className="text-[14px] text-[#303741] font-semibold list-none">
                <NavLink to={"/"}>About us</NavLink>
              </li>
              <li className="text-[14px] text-[#303741] font-semibold list-none">
                <NavLink to={"/"}>Blog</NavLink>
              </li>
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          <nav className="shadow px-2 py-1 w-fit rounded-lg max-[600px]:p-1">
            <Search className="!h-4 !text-blue-500 max-[600px]:!h-5" />
            <input
              className="w-[100px] max-[600px]:hidden"
              type="text"
              placeholder="Search..."
            />
            <kbd
              aria-hidden="true"
              className="border max-[600px]:hidden border-gray-400 px-2 rounded-lg"
            >
              Ctrl+K
            </kbd>
          </nav>
          <nav className="w-fit shadow p-1 rounded-lg">
            <GitHub className="text-blue-500 " />
          </nav>
          <nav className="w-fit shadow p-1 rounded-lg">
            <DarkModeOutlined className="text-blue-500 " />
          </nav>
          <button
            onClick={() => setMenu(!menu)}
            className="w-fit shadow p-1 rounded-lg hidden max-[850px]:block"
          >
            <MenuOutlined color="primary" className="text-blue-" />
          </button>
        </div>
      </nav>
    </div>
  );
};


export default Header;
