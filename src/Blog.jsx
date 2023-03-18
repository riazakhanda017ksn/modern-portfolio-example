/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./Blog.scss";

const Blog = () => {
  const Blog = [
    {
      name: "Understand with Javascript",
      post: "JavaScript is a multi-paradigm, dynamic language with types and operator . Its build in object in method. It made by Brendan which in 1995. JavaScript is a Syntax base on java and c language — there are lots of language that used structured from JavaScript.",
      img: "https://i.ibb.co/fYLq6xt/pexels-olia-danilevich-4974915.jpg",
      id: "637236277dq42",
      link: "https://riazakhanda.medium.com/javascript-8c420bfef001",
    },
    {
      name: "Understand with React",
      post: "React is a front-end JavaScript library which maintained by Facebook. React is a single page application or mobile application.Its more faster than another language framework or library.",
      img: "https://i.ibb.co/Sm5YD74/pexels-picjumbocom-196659.jpg",
      id: "637236277dq42q",
      link: "https://riazakhanda.medium.com/react-ee5b43176c4",
    },
    {
      name: "Javascript Data Types",
      post: "JavaScript is a multi-paradigm, dynamic language with types and operator . Its build in object in method. It made by Brendan which in 1995. JavaScript is a Syntax base on java and c language — there are lots of language that used structured from JavaScript.",
      img: "https://i.ibb.co/3W0ddbd/pexels-pavel-danilyuk-5496464.jpg",
      id: "6B37a236277dq42",
      link: "https://riazakhanda.medium.com/javascript-8c420bfef001",
    },
  ];
  return (
    <div className="blog">
      <h1 className="text-center">BLOG'S</h1>
      <h3 className="text-center">
        Here are some of my blogs including understand <br />
        Javascript,understand with ReactJS and Javascript data types
      </h3>
      <div className="blog-parent">
        {Blog.map((blogs) => {
          return (
            <div className="blog_item" key={blogs.id}>
              <img src={blogs.img} alt="" />
              <h2>{blogs.name}</h2>
              <p>{blogs.post.slice(0, 122)}........</p>
              <div className="text-end">
                <a href={blogs.link} target="_blank" rel="noopener noreferrer">
                  {" "}
                  Read More
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
