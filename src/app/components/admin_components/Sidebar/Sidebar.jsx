import React, { useState } from "react";
import control from "../../../../assets/icons/control.png";
import logo from "../../../../assets/icons/logo.png";
import { BsChevronDown } from "react-icons/bs";

import { Menus, menus } from "../../../data.js";
const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <div
      className={`${open ? "w-52" : "w-20"}  h-screen 
      duration-700 p-5 pt-8
      bg-main-sub-bg
      border border-right border-zincColor relative `}
    >
      <img
        src={control}
        className={`absolute w-7 top-9 cursor-pointer  border-2 rounded-full -right-3 duration-500
        ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      />
      <div className="flex  items-center gap-x-4">
        <img
          src={logo}
          className={`${open && "rotate-[360deg]"} cursor-pointer duration-300`}
        />
        <h1
          className={`text-gray-500 font-medium text-lg
        duration-500 ${!open && "scale-0"}`}
        >
          SpeedyWay
        </h1>
      </div>
      <ul>
        {Menus.map((menu, index) => {
          return (
            <>
              <li
                key={index}
                className={`flex items-center
              cursor-pointer gap-x-6  rounded-md my-2

              p-2 hover:bg-blue-900 hover:text-white $`}
              >
                <img src={menu.src} />
                <span
                  className={`${!open && "hidden"}
                origin-left duration-700 text-m font-medium `}
                >
                  {menu.title}
                </span>
                {menu.subMenuItems && (
                  <BsChevronDown
                    className={`${subMenuOpen && "rotate-180 duration-500"}  `}
                    onClick={() => {
                      setSubMenuOpen(!subMenuOpen);
                    }}
                  />
                )}
              </li>
              {menu.subMenuItems && subMenuOpen && open && (
                <ul className={`duration-700 ${!subMenuOpen && "scale-0"}  `}>
                  {menu.subMenuItems.map((subMenuItem, index) => (
                    <li
                      key={index}
                      className={`p-2 origin-left flex items-center justify-center hover:bg-blue-900 rounded duration-700
                      text-sm font-medium text-gray-500
                      `}
                    >
                      {subMenuItem.title}
                    </li>
                  ))}
                </ul>
              )}
            </>
          );
        })}
      </ul>

      <div
        className="mt-10 flex justify-center items-center
      font-medium text-xl bg-blue-900 rounded text-white hover:bg-zinc-300 gap-x-4 hover:border border-blue-900 cursor-pointer py-2"
      >
        <img src={BsChevronDown} />
        <span
          className={`${!open && "hidden"}
                origin-left duration-700 text-m font-medium font-medium  `}
        >
          Logout
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
