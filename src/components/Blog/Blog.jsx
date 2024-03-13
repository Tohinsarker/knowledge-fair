import React from "react";

const Blog = ({ data }) => {
  const {
    id,
    cover,
    title,
    author_img,
    hashtags,
    author,
    posted_date,
    reading_time,
  } = data;
  return (
    <div className="space-y-5">
      <div className="w-full mb-10">
        {" "}
        <img src={cover} alt="" />
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-5">
          <div className="w-[50px]">
            <img src={author_img} alt="" />
          </div>
          <div className="">
            <p>{author}</p>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p>{reading_time}</p>
          <button>Read</button>
        </div>
      </div>
      <h2>{title}</h2>
      <p>
        {hashtags[1]}, {hashtags[2]}
      </p>
    </div>
  );
};

export default Blog;
