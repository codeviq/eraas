import React from "react";

export const MainHeadingTextComponent = ({ text }) => {
  return (
    <div className=" p-5 text-start font-semibold text-sm ">Whole Sellers</div>
  );
};

export const SubHeadingTextComponent = ({ text }) => {
  return (
    <div className=" p-5 text-start font-semibold text-sm ">Whole Sellers</div>
  );
};

export const MainContentTextComponent = ({ text, textColor }) => {
  return (
    <div className={`p-5 text-start font-semibold text-sm ${textColor}`}>
      {text}
    </div>
  );
};

export const SubContentTextComponent = ({ text }) => {
  return (
    <div className=" p-5 text-start font-semibold text-sm ">Whole Sellers</div>
  );
};
