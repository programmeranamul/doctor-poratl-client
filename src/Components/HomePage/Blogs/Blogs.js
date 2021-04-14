import React from "react";
import wilson from '../../../images/Ellipse 1.png'
import Blog from "../Blog/Blog";

const blogData = [
  {
    title: "Check at least a doctor in a year for your teeth",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
    author: "Dr. Cudi",
    authorImg: wilson,
    date: "23 April 2019",
  },
  {
    title: "Two time brush in a day can keep you healthy",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
    author: "Dr. Sinthia",
    authorImg: wilson,
    date: "23 April 2019",
  },
  {
    title: "The tooth cancer is taking a challenge",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
    author: "Dr. Cudi",
    authorImg: wilson,
    date: "23 April 2019",
  },
];

const Blogs = () => {
  return <section className="container py-5">
      <article className="text-center mb-5 ">
          <h5 className="custom-color">OUR BLOG</h5>
          <h1>From Our Blog News</h1>
      </article>
      <article className="row my-5">
         {blogData.map((blog, index) => <Blog key={index} blog={blog}/> )} 
      </article>
  </section>;
};

export default Blogs;
