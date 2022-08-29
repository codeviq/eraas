import React from "react";
import { MainContentTextComponent } from "../../../components/global/textComponent/TextComponent";

const HomeScreen = () => {
  return (
    <div className="flex flex-col w-full h-full relative bg-main-bg ">
      <div className="flex  justify-evenly w-full my-4">
        <div className="  w-[200px] h-32 bg-main-sub-bg rounded-lg shadow-lg shadow-gray-400">
          <MainContentTextComponent text="Sub Admins" />
          <div className=" bg-red-700 w-[150px] h-[2px] ml-12"></div>
          <div className="flex flex-row full-width justify-between">
            <MainContentTextComponent text="Total" textColor="text-red-700" />
            <MainContentTextComponent text="1006" />
          </div>
        </div>
        <div className="  w-[200px] h-32 bg-main-sub-bg rounded-lg shadow-lg shadow-gray-400">
          <MainContentTextComponent text="Whole Sellers" />
          <div className=" bg-green-700 w-[150px] h-[2px] ml-12"></div>
          <div className="flex flex-row full-width justify-between">
            <MainContentTextComponent text="Total" textColor="text-green-700" />
            <MainContentTextComponent text="1004" />
          </div>
        </div>
        <div className="  w-[200px] h-32 bg-main-sub-bg rounded-lg shadow-lg shadow-gray-400">
          <MainContentTextComponent text="Shop Keepers" />
          <div className=" bg-blue-900 w-[150px] h-[2px] ml-12"></div>
          <div className="flex flex-row full-width justify-between">
            <MainContentTextComponent text="Total" textColor="text-blue-700" />
            <MainContentTextComponent text="1005" />
          </div>
        </div>
        <div className="  w-[200px] h-32 bg-main-sub-bg rounded-lg shadow-lg shadow-gray-400">
          <MainContentTextComponent text="Users" />
          <div className=" bg-yellow-700 w-[150px] h-[2px] ml-12"></div>
          <div className="flex flex-row full-width justify-between">
            <MainContentTextComponent
              text="Total"
              textColor="text-yellow-700"
            />
            <MainContentTextComponent text="1007" />
          </div>
        </div>
      </div>
      <div className="bg-zinc-300 w-full h-[1px] ml-20 mr-20 "></div>
    </div>
  );
};

export default HomeScreen;
