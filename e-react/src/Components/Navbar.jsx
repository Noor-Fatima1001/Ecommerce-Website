import React from 'react'
import { FaSearch } from "react-icons/fa";
import {AiOutlineUser,AiOutlineShoppingCart} from "react-icons/ai";
import CartCountBadge from './CartCountBadge';

const Navbar = ({setShowCart}) => {
  return (
    <div className='sticky top-0 z-10'>
      <div className="container  hidden lg:block">
        <div className="flex justify-between items-center p-8">
            <h1 className='text-4xl font-medium text-white'>Logo</h1>
            <div className="relative w-full max-w-[500px]">
                <input className='bg-gray-800 border border-gray-200 outline-none px-6 py-3 rounded-[30px] w-full text-white ' type="text" placeholder='Search Product...' />
                <FaSearch className="absolute top-0 right-0 mt-4 mr-5 bg-gray-800" size={20}/>
            </div>
            <div className="flex gap-5">
              <div className="icon__wrapper">
                <AiOutlineUser/>
              </div>
              <div className="icon__wrapper relative cursor-pointer " onClick={()=> setShowCart(true)}>
                <AiOutlineShoppingCart/>
                <CartCountBadge size='w-[25px] h-[25px]' />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar ;
