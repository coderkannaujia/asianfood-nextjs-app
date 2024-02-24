import React from "react";
import Image from "next/image";

import SelectFood from "/public/image/SelectFood.png";
import Customization from "/public/image/Customization.png";
import Placement from "/public/image/Placement.png";
import image29 from "/public/image/image29.png";
// import Customization from "/public/image/Customization.png"

const Order = () => {
  return (
    <div className=" h-full w-[1270px] mx-auto p-6 sm:w-[1300px] md:w-[1200px] lg:w-[1300px] xl:w-[2000px]  bg-blue-600 ">
      <h1 className="text-center font-bold text-5xl md:text-xl  xl:text-5xl ">
        How You Can order
      </h1>
      <div className="flex justify-between gap-4 mt-20 xl:flex xl:justify-center xl:gap-24  ">
        <div className="h-[450px] p-8 border-2 border-gray-300 rounded-lg shadow-lg shadow-rose-500 xl:w-[380px] xl:h-[500px]  xl:p-6 ">
          <Image
            src={SelectFood}
            alt="selectfood"
            className="xl:ml-6 xl:rounded-lg "
          />
          <h1 className="text-center text-md font-semibold mt-3 xl:text-3xl xl:mt-10  ">
            Select Food
          </h1>
          <p className="mt-4 text-center xl:text-xl ">
            selecting the type of food you
            <br /> want to order
          </p>
        </div>

        <div
          className="h-[450px] p-8 border-2 border-gray-300 rounded-lg shadow-lg shadow-rose-500 xl:w-[380px]
         xl:h-[500px]  xl:p-6 "
        >
          <Image
            src={Customization}
            alt="customization"
            className="xl:ml-6 xl:rounded-lg "
          />
          <h1 className="text-center text-md font-semibold mt-3 xl:text-3xl xl:mt-10 ">
            Customization
          </h1>
          <p className="mt-4 text-center xl:text-xl ">
            specify additional ingredients,
            <br /> modifications, or any specific
            <br /> preferences you may have
          </p>
        </div>

        <div className="h-[450px] p-8 border-2 border-gray-300 rounded-lg shadow-lg shadow-rose-500 xl:w-[380px] xl:h-[500px]  xl:p-6">
          <Image
            src={Placement}
            alt="placement"
            className="xl:ml-6 xl:rounded-lg "
          />
          <h1 className="text-center text-md font-semibold mt-3 xl:text-3xl xl:mt-10">
            Placement
          </h1>
          <p className="mt-4 text-center xl:text-xl ">
            you can either order online by
            <br /> adding items to your virtual cart
            <br /> and providing your contact
          </p>
        </div>

        <div className="h-[450px] p-6 border-2 border-gray-300 rounded-lg shadow-lg shadow-rose-500 xl:w-[380px] xl:h-[500px]  xl:p-6">
          <Image
            src={image29}
            alt="image29"
            className="xl:ml-6 xl:rounded-lg "
          />
          <h1 className="text-center text-md font-semibold xl:text-3xl xl:mt-4 ">
            Delivery/Pickup
          </h1>
          <p className=" text-center xl:text-xl ">
            You will typically receive a<br /> confirmation message or email
            <br /> that includes the details of your
            <br /> order, such as the estimated
            <br /> delivery or pickup time.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Order;
