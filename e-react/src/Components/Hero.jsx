import React from 'react';
import {BsArrowRight} from "react-icons/bs"
import fruits from "../assets/fruits11.jpg"; 
import pizza from "../assets/pizza13.jpg"
import chips from "../assets/burger12.jpg"

const Hero = () => {
  return (
    <div className="container ">
      <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
        <div className="xl:col-span-2 xl:row-start-1 xl:row-end-[-1] relative">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={fruits}
            alt="Delicious Friuts"
          />
          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4 bg-transparent">
            <p className="text-2xl text-black hidden sm:block text- bg-transparent">100% Original Fruits</p>
            <h2 className="text-2xl sm:text-4xl md:text-7xl font-bold  text-black bg-transparent "> Fruits Best Healthy</h2>
            <p className="text-white text-xl pt-4 sm:pt-8 bg-transparent">Starting At</p>
            <div className="font-medium text-green-950 text-2xl sm:text-4xl pb-4 sm:pb-8 bg-transparent" >$18.36</div>
            <div className="bg-yellow-400 hover:bg-yellow-600  text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer ">Shop Now<BsArrowRight className='bg-transparent'/>
            </div>
          </div>
        </div>

        <div className=" relative">
          <img className='w-full h-full object-cover rounded-lg' src={pizza} alt="Delicious Pizza" />
          <div className="absolute  bg-transparent max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2">
          <h2 className="text-2xl sm:text-4xl text-black font-bold bg-transparent">Best Yummy Pizza</h2>
         <p className="text-black text-xl pt-4 bg-transparent">Starting at</p>
         <div className="font-medium text-green-950 text-2xl sm:text-4xl pb-8 bg-transparent">$18</div>
            <div className='bg-yellow-400 hover:bg-yellow-600 text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] cursor-pointer bg-transparent'>Shop Now<BsArrowRight className='bg-transparent'/>
            </div>
          </div>
        </div>

        <div className="relative">
          <img className='w-full h-full object-cover rounded-lg' src={chips} alt="Delicious chips" />
          <div className="absolute bg-transparent max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2">
            <h2 className="text-2xl text-black sm:text-3xl font-bold bg-transparent">Best Yummy Burger</h2>
            <p className="text-black  text-xl pt-4 bg-transparent">Starting at</p>
            <div className="font-medium text-green-950 text-2xl sm:text-4xl pb-8 bg-transparent">$10</div>
            <div className='bg-yellow-400 hover:bg-yellow-600 text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] cursor-pointer bg-transparent'>Shop Now<BsArrowRight className='bg-transparent'/></div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
