import React from 'react'
import { RxCross1 } from "react-icons/rx"
import CartProduct from "./CartProduct";
import { useCartContext } from "../context/CartContext";


const Cart = ({ setShowCart }: any) => {
    const { product } = useCartContext();
    return (
        <div className='bg-[#0000007d] w-full h-screen fixed left-0 top-0 z-20' onClick={() => setShowCart(false)}>

            <div className='max-w-[400px] w-full h-full bg-black absolute top-0 right-0 p-6' onClick={(e) => e.stopPropagation()}>

                <RxCross1 className='absolute right-3 top-3 text-[24px] cursor-pointer' onClick={() => setShowCart(false)} />
                <h3 className='pt-6 text-lg font-medium text-gray-600 bg-transparent uppercase'>Your Cart</h3>

                {/* Scrollable container */}
                <div className=" mt-6 bg-black overflow-y-auto h-[70vh]">
                    {product?.map((el: any) => (
                        <CartProduct
                            key={el.name}
                            img={el.img}
                            name={el.name}
                            price={el.price}
                        />
                    ))}
                </div>

                <button className='bg-yellow-500 text-white text-center w-full rounded-3xl py-2 hover:bg-yellow-600 mb-4 mt-4 '>
                    View Cart
                </button>
                <button className='bg-yellow-500 text-white text-center w-full rounded-3xl py-2 hover:bg-yellow-600 mb-4 mt-4' >
                    CheckOut
                </button>
            </div>
        </div>
    );
};

export default Cart;
