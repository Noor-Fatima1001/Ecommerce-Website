import { comment } from 'postcss'
import React from 'react'
import post1 from "../assets/post__1.webp";
import post2 from "../assets/post__2.webp";
import post3 from "../assets/post__3.webp";
import BlogCard from './BlogCard';

const data =[
    {
        img:post1,
        title:"Healthy Food Healthy Life",
        date:"Nov 16,2024",
        comment:8,
    },
    {
        img:post2,
        title:"Healthy Food Healthy Life",
        date:"Nov 29,2024",
        comment:1,
    },
    {
        img:post3,
        title:"Healthy Food Healthy Life",
        date:"Dec 11,2024",
        comment:"5",
    },
];
const BlogSection = () => {
  return (
    <div className='container pt-16'>
      <h3 className="font-bold text-2xl ">Latest news</h3>
      <p className="text-gray-500">
        Present posts in a best way to highlight interesting moments of your blog.
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
      {data.map((el)=>(
        <BlogCard
        key={el.date}
        img={el.img}
        title={el.title}
        date={el.date}
        comment={el.comment}
        />
      ))}
      </div>
    </div>
  )
}

export default BlogSection
