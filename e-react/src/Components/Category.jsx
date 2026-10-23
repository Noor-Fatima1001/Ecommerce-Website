import React from 'react';
import CategoryCard from './CategoryCard';
import category__1 from "../assets/category__1.webp";
import category__2 from "../assets/category__2.webp";
import category__3 from "../assets/category__3.webp";
import category__4 from "../assets/category__4.webp";
import category__5 from "../assets/category__5.webp";
import category__6 from "../assets/category__6.webp";
import category__7 from "../assets/category__7.webp";
import category__8 from "../assets/category__8.webp";

const data = [
    {
        id: 0,
        name: "Fresh Fruits",
        count: "9 Products",
        img: category__1,
    },
    {
        id: 1,
        name: "Fresh vegs",
        count: "8 Products",
        img: category__2,
    },
    {
        id: 2,
        name: "Canned Goods",
        count: "10 Products",
        img: category__3,
    },
    {
        id: 3,
        name: "Tomato Soup",
        count: "8 Products",
        img: category__4,
    },
    {
        id: 4,
        name: "Fresh Fish",
        count: "6 Products",
        img: category__5,
    },
    {
        id: 5,
        name: "Eggs & Dairy",
        count: "7 Products",
        img: category__6,
    },
    {
        id: 6,
        name: "Soft Drinks",
        count: "5 Products",
        img: category__7,
    },
    {
        id: 7,
        name: "Fresh Fruits",
        count: "9 Products",
        img: category__8,
    },
];

const Category = () => {
    return (
        <div className='container pt-16'>
            <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {data.map((el) => (
                    <CategoryCard
                        key={el.id}
                        img={el.img}
                        name={el.name}
                        count={el.count}
                    />
                ))}
            </div>
        </div>
    );
};

export default Category;
