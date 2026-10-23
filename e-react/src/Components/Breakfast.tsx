import React from 'react'
import feature__2 from "../assets/feature__2.webp";
import product5 from "../assets/product__5.webp";
import product2 from '../assets/product__2.webp';
import product3 from "../assets/product__3.webp";
import product4 from "../assets/product__4.webp";
import ProductCard from './ProductCard';

const data =[
  {
    id:0, img:product5 , name:"Fresh Tomatoes" , price:"$400"
  },
  {
    id:1, img:product2 , name:"Crunchy Crisps" , price:"$300"
  },
  {
    id:2, img:product3 , name:"Jewel Cranberies" , price:"$200"
  },
  {
    id:3, img:product4 , name:"Almond Organic" , price:"$100"
  },

]


const Breakfast = () => {
  return (
    <div className='container pt-16'>
    <div className='lg:flex justify-between items-center'>
       <div>
        <h3 className=' font-medium text-2xl'>Breakfast & Dairy</h3>
        <p className='text-gray-600 mt-2'>
            Buy best quality breakfast online from big-basket stop near you.
        </p>
       </div>
       <div className="space-x-4 mt-8 lg:mt-0">
        <button className="feature_btn">Breakfast</button>
        <button className="text-gray-600 hover:text-yellow-400">Dairy</button>
        <button className="text-gray-600 hover:text-yellow-400">Bread & Bakery 
            </button>
       </div>
    </div>
    <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
    <div>
      <img className='w-full h-full object-cover' src={feature__2} alt="banner" />
    </div>
    {data.map((el)=> (
      <ProductCard
      key={el.id}
      img={el.img}
      name={el.name}
      price={el.price}
      />
    )
    )}
    </div></div>
  )
}

export default Breakfast
