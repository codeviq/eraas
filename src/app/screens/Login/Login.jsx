import React from "react";
import Button from "../../components/user_components/button/Button";
import TextInput from "../../components/user_components/form_inputs/TextInput";

const Login = () => {
  const loginClick = () => {
    console.log("shailendra singh");
  };

  return (
    <div className=" flex justify-center items-center    w-screen h-screen">
      <div
        className="  flex jsutify-center relative  items-center
      w-[800px]  h-[400px] bg-zinc-400
      rounded-lg"
      >
        <div
          className="  flex jsutify-center relative  items-center
      w-[400px]  h-[400px] bg-zinc-400
      rounded-lg"
        >
          <div
            className="absolute top-0 -left-20 w-72 h-72 bg-purple-300
        rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
          ></div>
          <div
            className="absolute top-0 -right-20 w-72 h-72 bg-yellow-300
        rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
          ></div>
          <div
            className="absolute -bottom-20   w-72 h-72 bg-pink-300
        rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
          ></div>

          <div
            className="  flex flex-col  items-center  w-[400px]  h-[400px] 
        hover:border hover:border-gray-300 rounded shadow-md shadow-gray-300 text-3xl font-extrabold
        "
          >
            <div className="my-10 text-white">Welcome To SpeedyWay</div>
            <div className="my-10 text-white">Hi Admin!</div>
          </div>
        </div>
        <div
          className="  flex jsutify-center relative  items-center
      w-[400px]  h-[400px] bg-zinc-400
      rounded-lg"
        >
          <div
            className="absolute top-0 -left-20 w-72 h-72 bg-purple-300
        rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
          ></div>
          <div
            className="absolute top-0 -right-20 w-72 h-72 bg-yellow-300
        rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
          ></div>
          <div
            className="absolute -bottom-20   w-72 h-72 bg-pink-300
        rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
          ></div>

          <div
            className=" relative flex flex-col items-center justify-center w-[400px]  h-[400px] bg-white
        hover:border hover:border-gray-300 rounded shadow-md shadow-gray-300"
          >
            <div className="flex items-center justify-center absolute w-[300px] h-1/5 -top-10 text-center bg-btnColor rounded-lg ">
              <h4 className="text-4xl font-bold text-white ">SIGNIN</h4>
            </div>

            <TextInput id={"email"} type={"Email Address"} />
            <TextInput id={"password"} type={"Password"} />

            <Button title={"SIGNIN"} onClick={loginClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
