import React from "react";

import { Avatar } from "@mui/material";

import avatar from "../../assets/2.jpg.svg";
import particle from "../../assets/particl-dark.svg.svg";

const CommentAndSupport = () => {
  return (
    <div className="bg-[#0f1214]">
      <div className="w-[95%] mx-auto py-16 flex flex-col gap-5 max-[320px]:w-[90%]">
        <div className="flex  flex-col  gap-1">
          <p className="text-[14px] font-bold text-[#0073e6]">
            Join the community
          </p>
          <p className="text-[36px] text-white max-[1102px]:text-[30px] max-[500px]:text-[27px] max-[350px]:text-[22px] font-bold  max-w-[500px]  ">
            Supported by thousands of
            <span className="text-[#39f]"> developers and designers</span>
          </p>
        </div>
        <div className="flex flex-col ">
          <div className="rounded-t-lg border border-[#1d2126] flex justify-evenly flex-wrap gap-4 py-4 bg-[linear-gradient(180deg,rgba(0,59,117,0.1)_2%,rgba(0,0,0,0)_80%)] px-5">
            <div className="flex items-center text-center flex-col ">
              <p className="text-[30px] text-[#9cf] font-semibold">5.8M</p>
              <p className="text-[14px] text-[#b6bec9] font-semibold">
                Weekly downloads on npm
              </p>
            </div>
            <div className="flex items-center text-center flex-col ">
              <p className="text-[30px] text-[#9cf] font-semibold">93.9k</p>
              <p className="text-[14px] text-[#b6bec9] font-semibold">
                Stars on GitHub
              </p>
            </div>
            <div className="flex items-center text-center flex-col ">
              <p className="text-[30px] text-[#9cf] font-semibold">3.0k</p>
              <p className="text-[14px] text-[#b6bec9] font-semibold">
                Open-source contributors
              </p>
            </div>
            <div className="flex items-center text-center flex-col ">
              <p className="text-[30px] text-[#9cf] font-semibold">19.2k</p>
              <p className="text-[14px] text-[#b6bec9] font-semibold">
                Followers on X
              </p>
            </div>
          </div>
          <div className="bg-[rgba(255,255,255,0.01)] grid grid-cols-2 max-[680px]:grid-cols-1 ">
            <div className="border border-[#1d2126] flex flex-col gap-6 py-7  px-10 max-[400px]:p-5">
              <p className="text-[15px] text-[#dfe2e7]">
                "We've relied on Material UI really heavily. I override a lot of
                default styles to try and make things our own, but the time we
                save with complex components like the Autocomplete and the Data
                Grid are so worth it. Every other library I try has 80% of what
                I'm looking for when it comes to complex use cases, Material UI
                has it all under one roof which is a huge help for our small
                team."
              </p>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Avatar src={avatar} />
                  <div>
                    <p className="text-[14px] font-semibold text-white">
                      Kyle Gill
                    </p>
                    <p className="text-[14px]   text-[#b6bec9]">
                      Engineer & Designer
                    </p>
                  </div>
                </div>
                <img src={particle} alt="" />
              </div>
            </div>
            <div className="border border-[#1d2126] flex flex-col gap-6 py-7  px-10 max-[400px]:p-5">
              <p className="text-[15px] text-[#dfe2e7]">
                "We've relied on Material UI really heavily. I override a lot of
                default styles to try and make things our own, but the time we
                save with complex components like the Autocomplete and the Data
                Grid are so worth it. Every other library I try has 80% of what
                I'm looking for when it comes to complex use cases, Material UI
                has it all under one roof which is a huge help for our small
                team."
              </p>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Avatar src={avatar} />
                  <div>
                    <p className="text-[14px] font-semibold text-white">
                      Assigned to
                    </p>
                    <p className="text-[14px]   text-[#b6bec9]">Lucas Smith</p>
                  </div>
                </div>
                <img src={particle} alt="" />
              </div>
            </div>
            <div className="border border-[#1d2126] flex flex-col gap-6 py-7  px-10 max-[400px]:p-5 max-[680px]:rounded-none rounded-bl-lg">
              <p className="text-[15px] text-[#dfe2e7]">
                "We've relied on Material UI really heavily. I override a lot of
                default styles to try and make things our own, but the time we
                save with complex components like the Autocomplete and the Data
                Grid are so worth it. Every other library I try has 80% of what
                I'm looking for when it comes to complex use cases, Material UI
                has it all under one roof which is a huge help for our small
                team."
              </p>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Avatar src={avatar} />
                  <div>
                    <p className="text-[14px] font-semibold text-white">
                      Kyle Gill
                    </p>
                    <p className="text-[14px]   text-[#b6bec9]">
                      Engineer & Designer
                    </p>
                  </div>
                </div>
                <img src={particle} alt="" />
              </div>
            </div>
            <div className="border border-[#1d2126] flex flex-col gap-6 py-7  px-10 max-[400px]:p-5 max-[680px]:rounded-b-lg rounded-br-lg">
              <p className="text-[15px] text-[#dfe2e7]">
                "After much research on React component libraries, we decided to
                ditch our in-house library for Material UI, using its powerful
                customization system to implement our Design System. This simple
                move did a rare thing in engineering: it lowered our maintenance
                costs while enhancing both developer and customer experience.
                All of this was done without sacrificing the organization's
                branding and visual identity."
              </p>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Avatar src={avatar} />
                  <div>
                    <p className="text-[14px] font-semibold text-white">
                      Assigned to
                    </p>
                    <p className="text-[14px]   text-[#b6bec9]">Lucas Smith</p>
                  </div>
                </div>
                <img src={particle} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentAndSupport;
