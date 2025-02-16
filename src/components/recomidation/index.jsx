import React from "react";

import RecomedCard from "./cardRecomi";

import { Chip, Rating, styled, Switch } from "@mui/material";

import logo from "../../assets/logo.svg";
import product1 from "../../assets/product-advanced-light.svg.svg";
import product2 from "../../assets/product-designkits-light.svg fill.svg";
import product3 from "../../assets/product-templates-light.svg fill.svg";
import product4 from "../../assets/product-toolpad-light.svg.svg";
import yosemite from "../../assets/yosemite.jpeg.svg";
import code from "../../assets/Background+Border.svg";

const Recomidation = () => {
  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 15,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(9px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(12px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: "#1890ff",
          ...theme.applyStyles("dark", {
            backgroundColor: "#177ddc",
          }),
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: "rgba(0,0,0,.25)",
      boxSizing: "border-box",
      ...theme.applyStyles("dark", {
        backgroundColor: "rgba(255,255,255,.35)",
      }),
    },
  }));

  return (
    <div className="linerHr py-5">
      <div className="grid grid-cols-2 w-[95%] mx-auto gap-10 items-center max-[957px]:grid-cols-1  max-[320px]:w-[90%]">
        <div className="flex flex-col gap-2">
          <p className="text-[36px] max-[1102px]:text-[30px] max-[500px]:text-[27px] max-[350px]:text-[22px] font-bold text-[#1d2126] flex flex-col max-[350px]:flex-wrap ">
            Every component you need is
            <span className="text-[#39f]">ready for production</span>
          </p>
          <p className="text-[#303741] max-[500px]:text-[14px]">
            Build at an accelerated pace without sacrificing flexibility or
            control.
          </p>
          <div className="flex flex-col  gap-4">
            <RecomedCard
              active={true}
              imgs={logo}
              text={"Foundational components for shipping features faster."}
              title={"Material UI"}
            />
            <RecomedCard
              imgs={product1}
              text={"Advanced components for complex use cases."}
              title={"MUI X"}
            />
            <RecomedCard
              imgs={product2}
              text={
                "Components and tools for building dashboards and internal apps"
              }
              title={"Toolpad"}
            />
            <RecomedCard
              imgs={product3}
              text={"Professionally built UIs to jumpstart your next project."}
              title={"Templates"}
            />
            <RecomedCard
              imgs={product4}
              text={
                "The core components available on your favorite design tool."
              }
              title={"Design kits"}
            />
          </div>
        </div>
        <div className="   rounded-t-xl  ">
          <div className="p-3 border border-[#e8eaee] rounded-t-xl">
            <div className="p-3 rounded-lg  bg-white shadow shadow-[rgba(127,143,159,0.3)] w-full flex flex-col gap-3">
              <img className="w-full" src={yosemite} alt="" />
              <div className="flex items-center gap-3 justify-between">
                <div className="flex flex-col gap-2">
                  <p className="font-semibold text-[#1a1e23]">
                    Yosemite National Park, California, USA
                  </p>
                  <div className="flex items-center gap-3">
                    <Chip
                      variant="filled"
                      label="active"
                      size="small"
                      className="!bg-[#c6f6d9] !text-[12px] font-semibold !text-[#0f5c2e]"
                    />
                    <Rating name="read-only" value={4} readOnly />
                  </div>
                </div>
                < AntSwitch 

                  size="large"
                  defaultChecked
                  inputProps={{ "aria-label": "ant design" }}
                />
              </div>
            </div>
          </div>
          <img className="w-full" src={code} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Recomidation;
