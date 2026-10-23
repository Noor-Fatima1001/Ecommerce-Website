import React from 'react'
import {LuMailOpen} from "react-icons/lu"

const NewsLetter = () => {
  return (
    <div className='bg-yellow-500  mt-16'>
        <div className="container bg-yellow-500 py-8 flex flex-col md:flex-row justify-between item-center gap-4 text-white">
            <div className='flex bg-transparent flex-shrink-0 items-center gap-4'>
            <LuMailOpen className='text-[60px] bg-transparent'/>
            <div className='bg-transparent'>
                <h3 className="text-xl sm:text-2xl font-semibold bg-transparent">Sign up To Our NewsLetters</h3>
                <p className='bg-transparent'>... and receive $20 coupon for first shopping.</p>
            </div>
        </div>
        <div className='w-full max-w-[500px] relative bg-transparent'>
            <input className='py-4 px-6 w-full rounded-full' type="text" placeholder='Your Email Address...' />
            <button className='bg-yellow-500 absolute  right-2 translate-y-[30%] py-1 px-4 rounded-full hover:bg-yellow-800'>Subscribe!</button>
        </div>
        </div>
    </div>
  )
}

export default NewsLetter;
