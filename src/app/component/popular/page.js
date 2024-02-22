import React from "react";
import Image from "next/image";

import Vector1 from "/public/image/Vector1.png"
import food1 from "/public/image/food1.png"
import add from "/public/image/add.png"
import food2 from "/public/image/food2.png"
import food4 from "/public/image/food4.png"


const Popularfood = () => {
  return (
    <div className="h-[1200px] bg-white ">
      <h1 className="text-center font-semibold ">Popular Food</h1>
      <div className="h-16 rounded-lg w-[1200px] border-2 border-gray-200 flex justify-between mt-6 p-2">
        <div>
          <button className="bg-yellow-400 p-3  rounded-lg w-20 ">All</button>
        </div>

        <div>
          <button className=" p-3  rounded-lg w-20 ">Soup</button>
        </div>

        <div>
          <button className=" p-3  rounded-lg w-20 ">Drink</button>
        </div>

        <div>
          <button className=" p-3  rounded-lg w-20 ">Spicy</button>
        </div>

        <div>
          <button className=" p-3  rounded-lg w-20 ">Tradition</button>
        </div>

        <div>
          <button className=" p-3  rounded-lg w-20 ">Sweet</button>
        </div>

        <div>
          <button className=" p-3  rounded-lg w-20 ">Cake</button>
        </div>
      </div>
      <div className="flex justify-between mt-12 gap-3  ">
        <div className="h-[450px] p-8   border-2 border-gray-300 ml-8 rounded-lg shadow-xl ">
          <Image src={Vector1} alt="vector1" />
          <Image src={food1} alt="food1" />
          <h1 className=" text-md font-semibold mt-2">Shrimp fried rice</h1>
          <p>
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

        <div className="h-[450px] p-8   border-2 border-gray-300 rounded-lg shadow-xl ">
          <Image src={Vector1} alt="vector1" />
          <Image src={food2} alt="food2" />
          <h1 className=" text-md font-semibold mt-2">Shrimp fried rice</h1>
          <p>
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

        <div className="h-[450px] p-8   border-2 border-gray-300 rounded-lg  shadow-xl">
          <Image src={Vector1} alt="vector1" />
          <Image src={food4} alt="food4" />
          <h1 className=" text-md font-semibold mt-2">Shrimp fried rice</h1>
          <p>
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

        <div className="h-[450px] p-8   border-2 border-gray-300 mr-4  rounded-lg shadow-xl ">
          <Image src={Vector1} alt="vector" />
          <Image src={food1} alt="food1"/>
          <h1 className=" text-md font-semibold mt-2">Shrimp fried rice</h1>
          <p>
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
     
      <div className="flex justify-between mt-12 gap-3 rounded-lg shadow-xl ">
        <div className="h-[450px] p-8   border-2 border-gray-300 ml-8 ">
          <Image src={Vector1} alt="vector1" />
          <Image src={food1}  alt="food2" />
          <h1 className=" text-md font-semibold mt-2">Shrimp fried rice</h1>
          <p>
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

        <div className="h-[450px] p-8   border-2 border-gray-300 rounded-lg  shadow-xl">
          <Image src={Vector1} alt="vector1" />
          <Image src={food2} alt="food2" className="" />
          <h1 className=" text-md font-semibold mt-2">Shrimp fried rice</h1>
          <p>
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

        <div className="h-[450px] p-8   border-2 border-gray-300 rounded-lg shadow-xl ">
          <Image src={Vector1} alt="vector1" />
          <Image src={food4}  alt="food4"/>
          <h1 className=" text-md font-semibold mt-2">Shrimp fried rice</h1>
          <p>
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

        <div className="h-[450px] p-8   border-2 border-gray-300 mr-4 rounded-lg shadow-xl  ">
          <Image src={Vector1} alt="vector1" />
          <Image src={food1} alt="food1" />
          <h1 className=" text-md font-semibold mt-2">Shrimp fried rice</h1>
          <p>
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
