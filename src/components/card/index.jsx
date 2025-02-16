import {
  AccessibilityNew,
  Article,
  Construction,
  InvertColors,
} from "@mui/icons-material";
import React from "react";

const Card = () => {
  return (
    <div className="w-[95%] mx-auto py-10">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1 ">
          <p className="text-[14px] font-bold text-[#0073e6]">
            Why build with MUI?
          </p>
          <p className="text-[36px] max-[1102px]:text-[30px] max-[500px]:text-[27px] max-[350px]:text-[22px] font-bold text-[#1d2126] max-w-[410px]  ">
            A <span className="text-[#39f]"> delightful experience </span>for
            you and your users
          </p>
        </div>
        <div className="grid grid-cols-4 gap-5 max-[978px]:grid-cols-2 max-[434px]:grid-cols-1 ">
          <div
            style={{
              background:
                "linear-gradient(0deg, rgba(235, 245, 255, 0.4) 0%, rgba(246, 247, 248, 0.1) 100%)",
            }}
            className=" border border-[#e8eaee] rounded-xl p-5 w-fit flex flex-col gap-4"
          >
            <div className="border border-[#9cf] rounded-xl w-fit p-2 shadow-[inset_0_2px_12px_1px_rgba(234,237,241,0.3),_0_0_0_2px_rgba(0,115,230,0.1)]  bg-[#ebf5ff]  ">
              <InvertColors color="primary" />
            </div>
            <div>
              <p className="font-semibold text-[14px]">Timeless aesthetics</p>
              <p className="text-[14px] text-[#303741]">
                Build beautiful UIs with ease. Start with Google's Material
                Design, or create your own sophisticated theme.
              </p>
            </div>
          </div>
          <div
            style={{
              background:
                "linear-gradient(0deg, rgba(235, 245, 255, 0.4) 0%, rgba(246, 247, 248, 0.1) 100%)",
            }}
            className=" border border-[#e8eaee] rounded-xl p-5 w-fit flex flex-col gap-4"
          >
            <div className="border border-[#9cf] rounded-xl w-fit p-2 shadow-[inset_0_2px_12px_1px_rgba(234,237,241,0.3),_0_0_0_2px_rgba(0,115,230,0.1)]  bg-[#ebf5ff]  ">
              <Construction color="primary" />
            </div>
            <div>
              <p className="font-semibold text-[14px]">Timeless aesthetics</p>
              <p className="text-[14px] text-[#303741]">
                Build beautiful UIs with ease. Start with Google's Material
                Design, or create your own sophisticated theme.
              </p>
            </div>
          </div>
          <div
            style={{
              background:
                "linear-gradient(0deg, rgba(235, 245, 255, 0.4) 0%, rgba(246, 247, 248, 0.1) 100%)",
            }}
            className=" border border-[#e8eaee] rounded-xl p-5 w-fit flex flex-col gap-4"
          >
            <div className="border border-[#9cf] rounded-xl w-fit p-2 shadow-[inset_0_2px_12px_1px_rgba(234,237,241,0.3),_0_0_0_2px_rgba(0,115,230,0.1)]  bg-[#ebf5ff]  ">
              <Article color="primary" />
            </div>
            <div>
              <p className="font-semibold text-[14px]">Timeless aesthetics</p>
              <p className="text-[14px] text-[#303741]">
                Build beautiful UIs with ease. Start with Google's Material
                Design, or create your own sophisticated theme.
              </p>
            </div>
          </div>
          <div
            style={{
              background:
                "linear-gradient(0deg, rgba(235, 245, 255, 0.4) 0%, rgba(246, 247, 248, 0.1) 100%)",
            }}
            className=" border border-[#e8eaee] rounded-xl p-5 w-fit flex flex-col gap-4"
          >
            <div className="border border-[#9cf] rounded-xl w-fit p-2 shadow-[inset_0_2px_12px_1px_rgba(234,237,241,0.3),_0_0_0_2px_rgba(0,115,230,0.1)]  bg-[#ebf5ff]  ">
              <AccessibilityNew color="primary" />
            </div>
            <div>
              <p className="font-semibold text-[14px]">Timeless aesthetics</p>
              <p className="text-[14px] text-[#303741]">
                Build beautiful UIs with ease. Start with Google's Material
                Design, or create your own sophisticated theme.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
