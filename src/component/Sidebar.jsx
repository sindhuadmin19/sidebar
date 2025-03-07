import React, { useState } from "react";
import "./sidebar.css";
import { FaCube } from "react-icons/fa6";
import { CiDeliveryTruck } from "react-icons/ci";
import { FiPieChart } from "react-icons/fi";
import { LuClipboardList } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { PiSquaresFourLight } from "react-icons/pi";

const Sidebar = () => {
  const [active, setActive] = useState(1);

  const menuItems = [
    { id: 1, icon: <PiSquaresFourLight size={"30px"} /> },
    { id: 2, icon: <CiDeliveryTruck size={"30px"} /> },
    { id: 3, icon: <FiPieChart size={"25px"} /> },
    { id: 4, icon: <LuClipboardList size={"25px"} /> },
    { id: 5, icon: <CgProfile size={"25px"} /> },
  ];

  return (
    <div className="sidebar">
      <div className="cube">
        <div className="cube">
          <FaCube size={"45px"} />
        </div>
      </div>
      {menuItems.map((item) => (
        <div
          key={item.id}
          className={`sidebar-item ${active === item.id ? "active" : ""}`}
          onClick={() => setActive(item.id)}
        >
          {item.icon}
        </div>
      ))}
      <div className="set">
        <IoSettingsOutline size={"25px"} />
      </div>
    </div>
  );
};

export default Sidebar;
