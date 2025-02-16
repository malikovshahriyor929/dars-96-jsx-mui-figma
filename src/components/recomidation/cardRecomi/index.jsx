import React from "react";

const RecomedCard = ({ active,imgs, title, text }) => {
  return (
    <>
      {active ? (
        <div className="border border-[#66b3ff] rounded-lg bg-[rgba(235,245,255,0.5)] p-3 px-4 flex items-center gap-4">
          <img src={imgs} alt="" />
          <div>
            <p className="text-[14px] text-[#1a1e23] font-semibold">{title}</p>
            <p className=" text-[#303741] text-[14px]">{text}</p>
          </div>
        </div>
      ) : (
        <div className=" rounded-lg  p-3 px-4 flex items-center gap-4">
          <img src={imgs} alt="" />
          <div>
            <p className="text-[14px] text-[#1a1e23] font-semibold">{title}</p>
            <p className=" text-[#303741] text-[14px]">{text}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default RecomedCard;
