import React from "react";
import Image from "next/image";
import food from "/public/image/food.png"
import search from "/public/image/search.png"
import shoppingcart from "/public/image/shoppingcart.png"
import notification from "/public/image/notification.png"
import image43 from "/public/image/image43.png"
import Button from "/public/image/Button.png"

const Navbar = () => {
  return (
    <div className="h-[800px] bg-white">
      <div className="flex justify-between">
        <div>
          <ul>
            <li className="pt-10 text-2xl font-bold ml-10 ">
              <Image src={food}  alt="food" />
              {/* <a href="">Asian food</a> */}
            </li>
          </ul>
        </div>

        <div>
          <ul className="flex justify-start gap-8 pt-10 text-md font-semibold ">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Service</a>
            </li>
            <li>
              <a href="">Contact us</a>
            </li>
          </ul>
        </div>

        <div>
          <ul className="flex justify-start gap-4 pt-10">
            <Image src={search} alt="search" />
            <Image src={shoppingcart} alt="shoppingcart" />
            <Image src={notification}  alt="notification"/>
            <li>
              <a href="" className="mr-10 text-md font-semibold ">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between  mt-12">
        <div>
          <Image
            src= { image43}  alt="foodimage"
            className="h-[500px]  w-[500px]  ml-44 "
          />
        </div>

        <div>
          <h1 className="mr-52 text-5xl font-bold mt-20">
            Happy with Delicious
            <br /> Food and get new
            <br /> Experiences with
            <br /> Asian food
          </h1>
          <h1 className="mt-8 ml-4  font-semibold ">
            Exploring new food with different transition form all Asian country
            <br /> especially from Cambodia that you can try at this place and
            get a<br /> good price from us as well we will make a good impact to
            our
            <br /> customers
          </h1>

          <div className="flex justify-start gap-4 mt-4">
            <div>
              <Image src={Button} alt="button"  />
            </div>
            <div>
              <button className="bg-white border-2 border-yellow-500 pt-2 h-14 w-36 text-md rounded-md bt-2 text-center pl-4 pr-4 ">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
