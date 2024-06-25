import React from "react";
import FooterDeatils from "./FooterDeatils";

const DashBoardsLeft4 = () => {
  return (
    <div className="w-full h-[320px]">
      <div className="flex flex-col pl-[100px] py-10">
        <div className="flex flex-row items-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/7622/cd8b/0141197fff7d64b94226a8c17be3edce?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l4Y8yiQzPLyWBrt9QqkZn7pR9okvDvC3NgGSV0UGkZuif1-plYp3IhOBV9zw~Y1G4~M~pSheAtnedkSiFzfvqxS1fjySDbX7Zaq8CficHwF10YRGHeGn0zCc9BwvPkqhDzf7tY6lg6lSaAZzUujt5zZ-QEk7WU~qCI~vZo5tpoUmE4KvJmAGIaoHnm5WHe6cg72RJ~NVhCU~1AV9mBVQHKGlohMZM3if9KzQlAq~xSN7O1HoDQP7hyaascss9aWBVsh7SHG~m91DwYa8TfnPrcAY~uBpYzDed8qWVC-x7mkgYM9fRkwiHbxD9rvbSq08mC-dRvKzdt40pdf4TTaFBA__"
            alt="atlassian"
            width={40}
            height={40}
          />
          <p className="px-4 font-medium text-[20px] text-[#4F4F4F]">
            Atlassian
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5 py-2">
          <FooterDeatils topic="company size" info="1k-2k Employees" />
          <FooterDeatils topic="Type" info="Private" />
          <FooterDeatils
            topic="Sector"
            info="Information Technology, Infrastructure"
          />
          <FooterDeatils topic="Funding" info="Bootstrapped" />
          <FooterDeatils topic="Founded In" info="2019" />
          <FooterDeatils
            topic="Founded By"
            info="Scott Farquhar, Mike Cannon-Brookes"
          />
        </div>
      </div>
    </div>
  );
};

export default DashBoardsLeft4;
