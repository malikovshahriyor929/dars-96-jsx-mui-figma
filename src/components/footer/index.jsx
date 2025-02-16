import React from "react";

import logo from "../../assets/logo.svg";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-[95%] mx-auto  max-[320px]:w-[90%] py-12 flex justify-between gap-5 max-[870px]:flex-col ">
      <div className="flex flex-col gap-4 w-fit">
        <img className="w-fit" src={logo} alt="" />
        <div>
          <p className="font-semibold">Keep up to date</p>
          <p className="text-[#303741]">
            Join our newsletter for regular updates. No spam ever.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[12px] text-[#303741] font-medium ">Your email</p>
          <div className="flex items-center gap-3 max-[350px]:flex-col">
            <div className="rounded-lg border-[#cad0d8] border shadow-[0_2px_0px_0_rgba(232,234,238,0.5),inset_0_1px_2px_1px_#f6f7f8] px-1 py-0.5 max-[350px]:w-full">
              <input type="text" placeholder="example@email.com" />
            </div>
            <Button
              color="primary"
              variant="outlined"
              className=" border max-[350px]:!w-full shadow-[0_1px_2px_0_rgba(204,230,255,0.5),inset_0_-1px_0_2px_rgba(204,230,255,0.4)] !text-[13px] !font-medium !rounded-lg "
              size="small"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-16 max-[1127px]:gap-7 max-[514px]:grid-cols-2">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-[#1a1e23]">Products</h1>
          <div className="flex flex-col gap-1">
            <Link to={"/"} className="text-[#303741] text-[14px]">
              Material UI
            </Link>
            <Link to={"/"} className="text-[#303741] text-[14px]">
              MUI Base
            </Link>
            <Link to={"/"} className="text-[#303741] text-[14px]">
              MUI X
            </Link>
            <Link to={"/"} className="text-[#303741] text-[14px]">
              Toolpad
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-[#1a1e23]">Resources</h1>
          <div className="flex flex-col gap-1">
            <Link to={"/"} className="text-[#303741] text-[14px]">
              Material Icons
            </Link>
            <Link to={"/"} className="text-[#303741] text-[14px]">
              Templates
            </Link>
            <Link to={"/"} className="text-[#303741] text-[14px]">
              Components
            </Link>
            <Link to={"/"} className="text-[#303741] text-[14px]">
              Customization
            </Link>
            <Link to={"/"} className="text-[#303741] text-[14px]">
              Design Kits
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-[#1a1e23]">Explore</h1>
          <div className="flex flex-col gap-1">
            <Link to={"/"} className="text-[#303741] text-[14px]">
              Documentation
            </Link>
            <Link to={"/"} className="text-[#303741] text-[14px]">
              Store
            </Link>
            <Link to={"/"} className="text-[#303741] text-[14px]">
              Blog
            </Link>
            <Link to={"/"} className="text-[#303741] text-[14px]">
              Showcase
            </Link>
            <Link to={"/"} className="text-[#303741] text-[14px]">
              Roadmap
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-[#1a1e23]">Company</h1>
          <div className="flex flex-col gap-1">
            <Link to={"/"} className="text-[#303741] text-[14px]">
              About
            </Link>
            <Link to={"/"} className="text-[#303741] text-[14px]">
              Vision
            </Link>
            <Link to={"/"} className="text-[#303741] text-[14px]">
              Careers
            </Link>
            <Link to={"/"} className="text-[#303741] text-[14px]">
              Support
            </Link>
            <Link to={"/"} className="text-[#303741] text-[14px]">
              Privacy policy
            </Link>
            <Link to={"/"} className="text-[#303741] text-[14px]">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
