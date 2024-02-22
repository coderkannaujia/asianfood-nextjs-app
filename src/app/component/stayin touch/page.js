import React from "react";
import Image from "next/image";
import food from "/public/image/food.png"

const Stayintouch = () => {
  return (
    <div className="h-[580px] bg-white">
      <h1 className="text-center text-2xl font-bold">Stay In Touch</h1>

      <div className="w-[480px] h-[280px] bg-white border-2 mt-20 ml-96 rounded-lg  ">
        <h1 className="text-center text-2xl font-semibold p-2">
          Login to our channel
        </h1>
        <h1 className="text-2xl mt-8 ml-4 ">Email</h1>
        <input type=" text" placeholder="Enter your email"  className="p-2 w-[450px] rounded-md  ml-4 mt-2 border-2 "></input>

      <button className="p-2 w-[450px] rounded-md  ml-4 bg-yellow-400 mt-16">Login Now</button>
      </div>

       <Image src={food}  alt="asianfodd" className="ml-96 w-96 mt-12"  />
    </div>
  );
};

export default Stayintouch;
