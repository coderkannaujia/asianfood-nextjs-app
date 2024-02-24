import React from "react";
import Image from "next/image";
import food from "/public/image/food.png";

const Stayintouch = () => {
  return (
    <div
      className=" h-full w-[1270px] mx-auto p-6 sm:w-[1300px] md:w-[1200px] lg:w-[1300px] xl:w-[2000px] 
     bg-orange-500"
    >
      <h1 className="text-center text-5xl md:text-2xl font-bold ">
        Stay In Touch
      </h1>

      <div className="w-[480px] h-[280px] bg-white border-2 mt-20 ml-96 rounded-lg xl:ml-96 xl:w-[1200px] xl:h-[500px]  xl:p-4 xl:h[250px] shadow-xl even:shadow-rose-500">
        <h1 className="text-center text-2xl font-semibold p-2 xl:text-5xl">
          Login to our channel
        </h1>
        <h1 className="text-2xl mt-8 ml-4 xl:text-center xl:text-3xl xl:mt-14 ">Email</h1>
        <input
          type=" text"
          placeholder="Enter your email"
          className="p-2 w-[450px] rounded-md  ml-4 mt-2 border-2 xl:w-[500px] xl:ml-20 "
        ></input>

        <button className="p-2 w-[450px] rounded-md  ml-4 bg-yellow-400 mt-16">
          Login Now
        </button>
      </div>

      <Image src={food} alt="asianfodd" className="ml-96 w-96 mt-12" />
    </div>
  );
};

export default Stayintouch;
