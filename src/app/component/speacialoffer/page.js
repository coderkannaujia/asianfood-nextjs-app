import React from "react";
import Image from "next/image";

import Image39 from "/public/image/Image39.png";
import Button from "/public/image/Button.png";

const Speacialoffer = () => {
  return (
    <div className=" h-full w-[1270px]  mx-auto p-10 sm:w-[1300px] md:w-[1200px] lg:w-[1300px] xl:w-[2000px]  bg-yellow-400 xl:p-12 ">
      <h1 className="text-center text-5xl md:text-2xl font-bold xl:text-5xl ">
        Special Offer
      </h1>

      <div className="flex justify-between xl:flex xl:justify-around  xl:gap-x-80  ">
        <div className=" ml-32 mt-14 ">
          <div className="h-[250px] w-[280px] xl:w-[400px] xl:h-[400] bg-emerald-800 rounded-sm mt-20 absolute shadow-lg blur-sm ml-32"></div>
          <div className="h-[250px] w-[280px]  xl:w-[400px] xl:h-[400] pr-4 bg-emerald-950 absolute  rounded-md  mt-12 ml-24   ">
            <Image src={Image39} alt="image39" />
          </div>
        </div>

        <div className="mt-40 mr-52">
          <h1 className="text-3xl font-bold xl:text-5xl  ">Get 50% off on Curry</h1>
          <p className="mt-4 font-semibold xl:text-2xl ">
            We offer 50% of on this food, we want you <br /> all to try Khmer
            food which has a good
            <br /> taste that everyone should try
          </p>
          <Image src={Button} alt="button" className="mt-6" />
        </div>
      </div>
    </div>
  );
};

export default Speacialoffer;
