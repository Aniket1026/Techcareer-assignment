import React from "react";
import "./Dashboard.css";

import { GoDotFill } from "react-icons/go";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineCircleStack } from "react-icons/hi2";
import DashboradLeft2 from "./DashboradLeft2";
import DashBoardLeft3 from "./DashBoardLeft3";
import DashBoardsLeft4 from "./DashBoardsLeft4";
import DashBoardInfo from "./DashBoardInfo";

const Dashboard = () => {
  return (
    <div class="dashboard-container">
      <div class="dashboard-left">
        <div class="dashboard-left-section1">
          <div class="title">
            <div class="job-title">Senior Product Designer</div>
            <div className="flex flex-row justify-evenly items-center flex-grow ">
              <div className="flex flex-row items-center text-[14px]">
                <GoDotFill size={5} />
                <p className="p-1">Posted 2 days ago</p>
              </div>
              <div className="flex flex-row items-center p-2 h-6 bg-green-100 text-green-500 border border-green-700 rounded-xl">
                <GoDotFill size={5} />
                <p className="p-1">open</p>
              </div>
            </div>
          </div>
          <div
            className="flex flex-row w-1/2 justify-between h-[27px] text-xl text-[#5D5D5D];
]"
          >
            <div className="flex flex-row items-center text-[#5D5D5D]">
              <SlLocationPin size={20} />
              <h2 className="pl-1">Delware, USA</h2>
            </div>
            <div className="flex flex-row items-center text-[#5D5D5D]">
              <HiOutlineCircleStack size={20} />
              <h2 className="pl-1">$300k-$400k</h2>
            </div> 
          </div>
        </div>
        <DashboradLeft2 />
        <DashBoardLeft3 />
        <DashBoardsLeft4 />
      </div>
      <div className="flex min-w-[30%] h-[360px]">
        <DashBoardInfo />
      </div>
    </div>
  );
};

export default Dashboard;
