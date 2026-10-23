import React from 'react';
import feature__1 from "../assets/feature__1.webp";
import product1 from "../assets/product__1.webp";
import product2 from "../assets/product__2.webp";
import product3 from "../assets/product__3.webp";
import product4 from "../assets/product__4.webp";
import ProductCard from './ProductCard';

const data = [
  { id: 0, img: product1, name: "Dried Mango", price: "$500" },
  { id: 1, img: product2, name: "Crunchy Crisps", price: "$300" },
  { id: 2, img: product3, name: "Jewel Cranberries", price: "$200" },
  { id: 3, img: product4, name: "Almond Organic", price: "$100" },
];

const Section = () => {
  return (
    <div className="container pt-16">
      {/* Header Section */}
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="font-medium text-2xl">Fruits & Vegetables</h3>
          <p className="text-gray-600 mt-2">
            Buy farm fresh Fruits and Vegetables online at the best price.
          </p>
        </div>
        <div className="space-x-4 mt-8 lg:mt-0">
          <button className="feature_btn">Fruits</button>
          <button className="text-gray-600 hover:text-yellow-500">Vegetables</button>
          <button className="text-gray-600 hover:text-yellow-500">Bread & Bakery</button>
        </div>
      </div>

      {/* Product Section */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
        <div>
          <img className="w-full h-full object-cover" src={feature__1} alt="banner" />
        </div>
        {data.map((el) => (
          <ProductCard key={el.id} img={el.img} name={el.name} price={el.price} />
        ))}
      </div>
    </div>
  );
};

export default Section;
