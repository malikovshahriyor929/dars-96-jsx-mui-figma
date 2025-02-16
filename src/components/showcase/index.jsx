import React from "react";

import { Avatar, Button, Chip, Paper } from "@mui/material";

import avatar from "../../assets/2.jpg.svg";
import calendar from "../../assets/Background+Border+Shadow.svg";

import {
  AccessTime,
  ArrowBack,
  CalendarMonth,
  ChevronRight,
  Code,
  DateRangeRounded,
} from "@mui/icons-material";
import LinearWithValueLabel from "../progress";
// import DateRangeCalendarCalendarsProp from "../calendar";
const Showcase = () => {
  return (
    <div className="grid grid-cols-3 items-center max-w-[1440px] m-auto max-[859px]:flex ">
      <div className="w-[90%] mx-auto col-span-2  flex flex-col gap-2 max-[859px]:items-center max-[859px]: ">
        <h1 className="text-[56px]  font-semibold flex gap-1 flex-col max-[576px]:text-[40px] max-[576px]:leading-10  max-[859px]:text-center  ">
          <span className="text-blue-500"> Move faster</span>
          with intuitive 
          React UI tools
        </h1>
        <p className="max-w-[483px] max-[859px]:text-center">
          MUI offers a comprehensive suite of free UI tools to help you ship new
          features faster. Start with Material UI, our fully-loaded component
          library, or bring your own design system to our production-ready
          components.
        </p>
        <Button variant="contained" className="w-fit !my-4">
          Discover the Core libraries <ChevronRight />
        </Button>
      </div>
      <div className="bg-[#ebf5ff] p-5 max-[859px]:hidden rounded-b-lg ">
        <div className="">
          <div className="flex flex-col gap-3">
            <Paper
              className="p-5 !bg-[#006bd6] !rounded-xl !text-white "
              elevation={2}
            >
              <div className="flex flex-col gap-5 ">
                <div className="flex items-center gap-1 font-semibold  text-[12px]">
                  <AccessTime className="!h-4" />
                  <p>March 25th</p>
                </div>
                <div className="flex flex-col gap-2">
                  <Code />
                  <p className="text-[18px] font-semibold max-[936px]:text-[16px] ">
                    Customize every button and chip instance primary color
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Avatar src={avatar} />
                  <div>
                    <p className="text-[12px] font-semibold text-[#cce6ff]">
                      Assigned to
                    </p>
                    <p className="text-[14px] font-semibold ">Lucas Smith</p>
                  </div>
                </div>
                {LinearWithValueLabel()}
              </div>
            </Paper>
            <div className="flex items-center gap-2  max-[1099px]:grid grid-cols-3 w-fit ">
              <Chip
                className="!bg-[#ebf5ff] font-semibold"
                label="MUI"
                variant="outlined"
                color="primary"
                size="small"
              />
              <Chip
                className="!bg-[#fffbeb] !border-[#ffda47] font-semibold !text-[#8a5300]"
                label="React"
                variant="outlined"
                size="small"
              />
              <Chip
                className="!bg-[#ebf5ff] font-semibold"
                label="CSS"
                variant="outlined"
                color="success"
                size="small"
              />
              <Chip
                className="!bg-[#ebf5ff] font-semibold"
                label="TypeScript"
                variant="outlined"
                color="error"
                size="small"
              />
              <Chip
                className="!bg-[#ebf5ff] font-semibold !text-[gray]"
                label="JavaScript"
                variant="outlined"
                color="default"
                size="small"
              />
            </div>
            <img src={calendar} alt="" />
            {/* <DateRangeCalendarCalendarsProp /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
