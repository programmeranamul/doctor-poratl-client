import React from "react";
import './Blog.css'

const Blog = ({ blog }) => {
  const { title, description, author, authorImg, date } = blog;
  return (
    <div className="col-md-4 d-flex blog">
      <div className="card height-100 border-0 shadow ">
        <div className="card-header d-flex align-items-center border-0">
          <img src={authorImg} alt={author} width="60" className="mr-3" />
          <div>
            <h5>{author}</h5>
            <p className="m-0">{date}</p>
          </div>
        </div>
        <div className="card-body">
          <h5 className="mb-4">{title}</h5>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
