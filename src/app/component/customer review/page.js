import React from "react";

import Image from "next/image";

import amit1 from "/public/image/amit1.jpg"
import Frame41 from "/public/image/Frame41.png"

const Customerreview = () => {
  return (
    <div className=" h-full w-[1270px] mx-auto p-6 sm:w-[1300px] md:w-[1200px] lg:w-[1300px] xl:w-[2000px] 
     bg-red-600">
      <h1 className="text-center text-5xl md:text-3xl font-semibold ">
        Review form our customers say
      </h1>
      <div className="flex justify-start gap-14  mt-20 xl:gap-64 xl:ml-56">
        <div className="h-[300px] w-[550px] bg-white rounded-lg ml-16 ">
          <div className="flex justify-start gap-4">
            <div>
              <Image
                src={amit1} alt="amit1"
                className="w-10 h-10 mt-6 rounded-full ml-4"
              />
            </div>
            <div>
              <h1 className="mt-8 text-xl font-semibold  ">Andia jorida</h1>
            </div>
          </div>
          <h1 className="mt-6 ml-4">
            My experience at your restaurant was truly excellent.The food was
            absolutely delicious every dish was perfectly cooked and bursting
            with flavor. But what really impressed me was the service. Your
            staff was attentive, friendly which make me feel want to be there
            again.
          </h1>
          <div className="flex justify-start gap-4 mt-4 ml-4">
            <div>
              <Image src={Frame41}  alt="frame41" />
            </div>
            <div>
              <h1>5 stars</h1>
            </div>
          </div>
        </div>

        <div className="h-[300px] w-[610px] bg-white rounded-lg">
          <div className="flex justify-start gap-4">
            <div>
              <Image
                src={amit1} alt="amit1"
                className="w-10 h-10 mt-6 rounded-full ml-4"
              />
            </div>
            <div>
              <h1 className="mt-8 text-xl font-semibold  ">William Henry</h1>
            </div>
          </div>
          <h1 className="mt-6 ml-6">
            Living in Canada, I hadn't ventured much into Asian cuisine until
            recently.
            <br /> But wow, what a delicious world I've been missing! Khmer
            food, in particular, has captured my heart, and Bok Loh Hong holds a
            special place in my memory as the dish that first made me say,
            "Asian food is so yummy!"
          </h1>
          <div className="flex justify-start gap-4 mt-6 ml-4">
            <div>
              <Image src={Frame41} alt="frame41" />
            </div>
            <div>
              <h1>5 stars</h1>
            </div>
          </div>
        </div>
      </div>
      <h1 className="ml-16 text-lg mt-4 font-semibold">Add a review +</h1>
    </div>
  );
};

export default Customerreview;
