import React from "react";
import { BiSolidShoppingBag } from "react-icons/bi";
import { LuMessageSquare } from "react-icons/lu";
import { FaHandHoldingUsd } from "react-icons/fa";
import { PiBellSimple } from "react-icons/pi";
import { RxChevronDown } from "react-icons/rx";

import "./Nav.css";

const Nav = () => {
  return (
    <div class="nav-container">
      <div class="nav-box">
        <div class="nav-container1">Logo</div>
        <div class="nav-container2">
          <div class="nav-container2-child1">
            <BiSolidShoppingBag size={22} />
            <h3 class="heading1">Jobs</h3>{" "}
          </div>
          <div class="nav-container2-child2">
            <LuMessageSquare size={18} />
            <h3 class="">Messages</h3>
          </div>
          <div class="nav-container2-child2">
            <FaHandHoldingUsd size={18} />
            <h3>Payments</h3>
          </div>
        </div>
        <div class="nav-container3">
          <div>
            <PiBellSimple size={32} />{" "}
          </div>
          <div class="nav-container3-child2">
            <img
              src="https://s3-alpha-sig.figma.com/img/7622/cd8b/0141197fff7d64b94226a8c17be3edce?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l4Y8yiQzPLyWBrt9QqkZn7pR9okvDvC3NgGSV0UGkZuif1-plYp3IhOBV9zw~Y1G4~M~pSheAtnedkSiFzfvqxS1fjySDbX7Zaq8CficHwF10YRGHeGn0zCc9BwvPkqhDzf7tY6lg6lSaAZzUujt5zZ-QEk7WU~qCI~vZo5tpoUmE4KvJmAGIaoHnm5WHe6cg72RJ~NVhCU~1AV9mBVQHKGlohMZM3if9KzQlAq~xSN7O1HoDQP7hyaascss9aWBVsh7SHG~m91DwYa8TfnPrcAY~uBpYzDed8qWVC-x7mkgYM9fRkwiHbxD9rvbSq08mC-dRvKzdt40pdf4TTaFBA__"
              alt="logo"
              width={40}
              height={40}
              class="logo"
            />
            <RxChevronDown size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
