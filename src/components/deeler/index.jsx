import React from "react";

import spotify from "../../assets/spotify-light.svg.svg";
import unity from "../../assets/unity-light.svg.svg";
import nasa from "../../assets/nasa.svg.svg";
import amazon from "../../assets/amazon-light.svg.svg";
import shutter from "../../assets/shutterstock-light.svg fill.svg";
import netflix from "../../assets/netflix.svg fill.svg";

const Deeler = () => {
  return (
    <div className="w-[95%] mx-auto py-16 flex   flex-col gap-5   max-[320px]:w-[90%]">
      <div className="grid items-center grid-cols-6 gap-5 max-[924px]:grid-cols-3 max-[466px]:grid-cols-2">
        <img className="mx-auto" src={spotify} alt="" />
        <img className="mx-auto" src={unity} alt="" />
        <img className="mx-auto" src={nasa} alt="" />
        <img className="mx-auto" src={amazon} alt="" />
        <img className="mx-auto" src={shutter} alt="" />
        <img className="mx-auto" src={netflix} alt="" />
      </div>
      <p className="text-[14px] text-[#303741] self-center text-center max-w-[341px]">
      The world's best product teams trust MUI to deliver an
      unrivaled experience for both developers and users.
      </p>
    </div>
  );
};

export default Deeler;
