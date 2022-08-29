import React from "react";

const TextInput = ({ id, type }) => {
  return (
    <div className="flex flex-col w-[300px ] ">
      <label for={id} className=" text-sm font-bold text-gray-500 p-2">
        {type}
      </label>
      <input
        id={id}
        name={type}
        type={type}
        autocomplete={type}
        required
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 
        text-sm font-semibold placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-btnColor focus:border-btnColor focus:z-10 sm:text-sm"
        placeholder={type}
      />
    </div>
  );
};

export default TextInput;
