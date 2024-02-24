import React from "react";
import Image from "next/image";

import Vector1 from "/public/image/Vector1.png";
import food1 from "/public/image/food1.png";
import add from "/public/image/add.png";
import food2 from "/public/image/food2.png";
import food4 from "/public/image/food4.png";

const Popularfood = () => {
  return (
    <div className=" h-full w-[1270px] mx-auto p-4 sm:w-[1300px] md:w-[1200px] lg:w-[1300px] xl:w-[2000px] bg-green-600 ">
      <h1 className="text-center font-semibold text-5xl md:text-xl xl:text-5xl  ">
        Popular Food
      </h1>
      <div className="h-full rounded-lg w-[1200px] border-2 border-gray-200 flex justify-between mt-6 p-2 xl:mt-8 xl:pb-8  xl:h-20  ">
        <div className=" ">
          <button className="bg-yellow-400 p-3  rounded-lg w-20 xl:text-xl ">
            All
          </button>
        </div>

        <div>
          <button className=" p-3  rounded-lg w-20 xl:text-2xl ">Soup</button>
        </div>

        <div>
          <button className=" p-3  rounded-lg w-20 xl:text-2xl ">Drink</button>
        </div>

        <div>
          <button className=" p-3  rounded-lg w-20  xl:text-2xl">Spicy</button>
        </div>

        <div>
          <button className=" p-3  rounded-lg w-20  xl:text-2xl">
            Tradition
          </button>
        </div>

        <div>
          <button className=" p-3  rounded-lg w-20 xl:text-2xl ">Sweet</button>
        </div>

        <div>
          <button className=" p-3  rounded-lg w-20  xl:text-2xl">Cake</button>
        </div>
      </div>
      <div className="flex justify-between mt-12 gap-3  xl:flex xl:justify-center xl:gap-24 ">
        <div className="h-[450px] p-8   border-2 border-gray-300 ml-8 rounded-lg xl:h-[520px] xl:w-[440px] shadow-xl shadow-rose-500 ">
          <Image src={Vector1} alt="vector1" />
          <Image src={food1} alt="food1" className="xl:ml-10   " />
          <h1 className=" text-md font-semibold mt-2 xl:text-3xl xl:text-center  ">
            Shrimp fried rice
          </h1>
          <p className="xl:text-xl xl:text-center xl:mt-3 ">
            shrimp fried rice, such as diced
            <br /> carrots, peas, onions, and bell
            <br /> peppers.
          </p>
          <div className="flex justify-between">
            <div>
              <h1 className="font-semibold">2.30 USD</h1>
            </div>
            <div>
              <Image src={add} alt="add" />
            </div>
          </div>
        </div>

        <div className="h-[450px] p-8   border-2 border-gray-300 rounded-lg  xl:h-[520px] xl:w-[440px] shadow-xl shadow-rose-500">
          <Image src={Vector1} alt="vector1" />
          <Image src={food2} alt="food2" className="xl:ml-10   " />
          <h1 className=" text-md font-semibold mt-2 xl:text-3xl xl:text-center">Shrimp fried rice</h1>
          <p className="xl:text-xl xl:text-center xl:mt-3">
            shrimp fried rice, such as diced
            <br /> carrots, peas, onions, and bell
            <br /> peppers.
          </p>
          <div className="flex justify-between">
            <div>
              <h1 className="font-semibold">2.30 USD</h1>
            </div>
            <div>
              <Image src={add} alt="add" />
            </div>
          </div>
        </div>

        <div className="h-[450px] p-8   border-2 border-gray-300 rounded-lg   xl:h-[520px] xl:w-[440px] shadow-xl shadow-rose-500">
          <Image src={Vector1} alt="vector1" />
          <Image src={food4} alt="food4" className="xl:ml-10   " />
          <h1 className=" text-md font-semibold mt-2 xl:text-3xl xl:text-center">Shrimp fried rice</h1>
          <p className="xl:text-xl xl:text-center xl:mt-3">
            shrimp fried rice, such as diced
            <br /> carrots, peas, onions, and bell
            <br /> peppers.
          </p>
          <div className="flex justify-between">
            <div>
              <h1 className="font-semibold">2.30 USD</h1>
            </div>
            <div>
              <Image src={add} alt="add" />
            </div>
          </div>
        </div>

        <div className="h-[450px] p-8   border-2 border-gray-300 mr-4  rounded-lg  xl:h-[520px] xl:w-[440px] shadow-xl shadow-rose-500 ">
          <Image src={Vector1} alt="vector" />
          <Image src={food1} alt="food1" className="xl:ml-10   " />
          <h1 className=" text-md font-semibold mt-2 xl:text-3xl xl:text-center">Shrimp fried rice</h1>
          <p className="xl:text-xl xl:text-center xl:mt-3">
            shrimp fried rice, such as diced
            <br /> carrots, peas, onions, and bell
            <br /> peppers.
          </p>
          <div className="flex justify-between">
            <div>
              <h1 className="font-semibold">2.30 USD</h1>
            </div>
            <div>
              <Image src={add} alt="add" />
            </div>
          </div>
        </div> 
   
      </div>

      <div className="flex justify-between mt-12 gap-3 rounded-lg xl:flex xl:justify-center xl:gap-24 shadow-xl " >
        <div className="h-[450px] p-8   border-2 border-gray-300 ml-8  xl:h-[520px] xl:w-[440px] shadow-rose-500 ">
          <Image src={Vector1} alt="vector1" />
          <Image src={food1} alt="food2" className="xl:ml-10 "/>
          <h1 className=" text-md font-semibold mt-2 xl:text-3xl xl:text-center">Shrimp fried rice</h1>
          <p className="xl:text-xl xl:text-center xl:mt-3">
            shrimp fried rice, such as diced
            <br /> carrots, peas, onions, and bell
            <br /> peppers.
          </p>
          <div className="flex justify-between">
            <div>
              <h1>2.30 USD</h1>
            </div>
            <div>
              <Image src={add} alt="add" />
            </div>
          </div>
        </div>

        <div className="h-[450px] p-8   border-2 border-gray-300 rounded-lg   xl:h-[520px] xl:w-[440px] shadow-xl shadow-rose-500 ">
          <Image src={Vector1} alt="vector1" />
          <Image src={food2} alt="food2" className="xl:ml-10 " />
          <h1 className=" text-md font-semibold mt-2 xl:text-3xl xl:text-center">Shrimp fried rice</h1>
          <p className="xl:text-xl xl:text-center xl:mt-3">
            shrimp fried rice, such as diced
            <br /> carrots, peas, onions, and bell
            <br /> peppers.
          </p>
          <div className="flex justify-between">
            <div>
              <h1>2.30 USD</h1>
            </div>
            <div>
              <Image src={add} alt="add" />
            </div>
          </div>
        </div>

        <div className="h-[450px] p-8   border-2 border-gray-300 rounded-lg shadow-xl xl:h-[520px] xl:w-[440px] shadow-rose-500 ">
          <Image src={Vector1} alt="vector1" />
          <Image src={food4} alt="food4" className="xl:ml-10 " />
          <h1 className=" text-md font-semibold mt-2 xl:text-3xl xl:text-center">Shrimp fried rice</h1>
          <p className="xl:text-xl xl:text-center xl:mt-3">
            shrimp fried rice, such as diced
            <br /> carrots, peas, onions, and bell
            <br /> peppers.
          </p>
          <div className="flex justify-between">
            <div>
              <h1>2.30 USD</h1>
            </div>
            <div>
              <Image src={add} alt="add" />
            </div>
          </div>
        </div>

        <div className="h-[450px] p-8   border-2 border-gray-300 mr-4 rounded-lg shadow-xl xl:h-[520px] xl:w-[440px]  shadow-rose-500 ">
          <Image src={Vector1} alt="vector1" />
          <Image src={food1} alt="food1" className="xl:ml-10 " />
          <h1 className=" text-md font-semibold mt-2 xl:text-3xl xl:text-center">Shrimp fried rice</h1>
          <p className="xl:text-xl xl:text-center xl:mt-3">
            shrimp fried rice, such as diced
            <br /> carrots, peas, onions, and bell
            <br /> peppers.
          </p>
          <div className="flex justify-between">
            <div>
              <h1>2.30 USD</h1>
            </div>
            <div>
              <Image src={add} alt="add" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popularfood;
