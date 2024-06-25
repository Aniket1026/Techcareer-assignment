import React from 'react'

const DashBoardInfoSection = ({text,icon: Icon,number,border}) => {
  return (
    <div className={`flex flex-row h-1/5 items-center text-base font-medium justify-between ${border ? 'border-b-2 border-gray-200':'border-none'}`}>
      <div className="flex w-1/3 flex-row items-center text-[#4F4F4F] text-[16px] ">
        <Icon size={16} />
        <p className="pl-2">{text}</p>
      </div>
      <p>{number}</p>
    </div>
  );
}

export default DashBoardInfoSection