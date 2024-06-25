import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdOutlineModeEdit } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { IoEyeSharp } from "react-icons/io5";
import { LuMessageSquare } from "react-icons/lu";
import DashBoardInfoSection from "./DashBoardInfoSection";

const DashBoardInfo = () => {
  return (
    <div className="flex w-full flex-col justify-between p-5">
      <div className="w-full flex flex-row justify-between items-start">
        <button className="flex flex-row w-40 h-12 justify-evenly items-center bg-[#FEF4F2] rounded-lg border-[#DC4A2D] border-2 text-[#DC4A2D]">
          <RiDeleteBin5Line size={16} /> <p>Delete Job</p>{" "}
        </button>
        <button className="flex flex-row w-40 h-12 rounded-lg text-[#FFFFFF] justify-evenly items-center bg-[#DC4A2D]">
          {" "}
          <MdOutlineModeEdit size={16} />
          <p>Edit Job</p>{" "}
        </button>
      </div>
      <DashBoardInfoSection
        text="Applicants"
        icon={GoPeople}
        number="400"
        border={true}
      />
      <DashBoardInfoSection
        text="Matches"
        icon={BsFillPersonCheckFill}
        number="100"
        border={true}
      />
      <DashBoardInfoSection
        text="Messages"
        icon={LuMessageSquare}
        number="147"
        border={true}
      />
      <DashBoardInfoSection
        text="Views"
        icon={IoEyeSharp}
        number="800"
        border={false}
      />
    </div>
  );
};

export default DashBoardInfo;
