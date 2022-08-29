import React from "react";

const Button = ({ title, onClick }) => {
  return (
    <div
      className="flex text-center bg-btnColor cursor-pointer px-20 py-2 text-white 
        items-center rounded-xl text-xl font-semibold shadow-xl shadow-gray-300 my-10"
      onClick={onClick}
    >
      {title}
    </div>
  );
};

export default Button;
