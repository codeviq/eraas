import { BsChevronDown } from "react-icons/bs";
import control from "../assets/icons/control.png";
import logo from "../assets/icons/logo.png";

import Chart_fill from "../assets/icons/Chart_fill.png";
import Chat from "../assets/icons/Chat.png";

import Chart from "../assets/icons/Chart.png";

import Setting from "../assets/icons/Setting.png";

import Search from "../assets/icons/Search.png";

import User from "../assets/icons/User.png";

import Folder from "../assets/icons/Folder.png";
import Calendar from "../assets/icons/Calendar.png";


 export const Menus = [
    { title: "Dashboard", src: `${Chart_fill}` },
    { title: "Inbox", src: `${Chat}` },
    {
      title: "Accounts",
      src: `${User}`,
      gap: true,
      subMenuItems: [{ title: "Profile" }, { title: "Settings" }],
    },
    { title: "Schedule", src: `${Calendar}` },
    { title: "Search", src: `${Search}` },
    { title: "Analytics", src: `${Chart}` },
    { title: "Files", src: `${Folder}`, gap: true },
    { title: "Setting", src: `${Setting}` },
  ];