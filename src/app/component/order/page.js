import React from "react";
import Image from "next/image";

import SelectFood from "/public/image/SelectFood.png"
import Customization from "/public/image/Customization.png"
import Placement from "/public/image/Placement.png"
import image29 from "/public/image/image29.png"
// import Customization from "/public/image/Customization.png"

const Order = () => {
  return (
    <div className="h-[700px] bg-white ">
      <h1 className="text-center font-bold text-xl">How You Can order</h1>
      <div className="flex justify-between mt-20">

        <div className="h-[450px] p-8 border-2 border-gray-300 rounded-lg shadow-lg">
          <Image src={SelectFood} alt="selectfood" />
          <h1 className="text-center text-md font-semibold mt-3">Select Food</h1>
          <p className="mt-4 text-center "> selecting the type of food you<br /> want to order</p>
         </div>

        <div className="h-[450px] p-8 border-2 border-gray-300 rounded-lg shadow-lg ">
        <Image src={Customization} alt="customization" />
        <h1 className="text-center text-md font-semibold mt-3">Customization</h1>
        <p className="mt-4 text-center ">specify additional ingredients,<br/> modifications, or any specific<br/> preferences you may have</p>
        </div>

        <div className="h-[450px] p-8 border-2 border-gray-300 rounded-lg shadow-lg">
        <Image src={Placement} alt="placement" />
        <h1 className="text-center text-md font-semibold mt-3">Placement</h1>
        <p className="mt-4 text-center ">you can either order online by<br/> adding items to your virtual cart<br/> and providing your contact</p>
         </div>

         <div className="h-[450px] p-8  mr-4 border-2 border-gray-300 rounded-lg shadow-lg"> 
         <Image src={image29} alt="image29" />
         <h1 className="text-center text-md font-semibold mt-2">Delivery/Pickup</h1>
        <p className="mt-1 text-center ">You will typically receive a<br/> confirmation message or email<br/> that includes the details of your<br/> order, such as the estimated<br/> delivery or pickup time. </p>
        </div>

      </div>
    </div>
  );
};

export default Order;
