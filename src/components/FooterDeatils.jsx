import React from "react";

const FooterDeatils = ({ topic, info }) => {
  return (
    <div className="w-[345px] h-[50px] font-medium gap-2 flex flex-col justify-between">
      <div className=" text-[14px] text-[#6E6D6D]">{topic}</div>
      <div className="text-[16px] text-[#3D3D3D] ">{info}</div>
    </div>
  );
};

export default FooterDeatils;
