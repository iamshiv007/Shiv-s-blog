import React, { Fragment } from "react";
import Link from "next/link";
import { blogs } from "@/components/blogData";

const Blogs = () => {
  return (
    <Fragment>
      <p className="font-bold text-2xl p-2 dark:text-white">Blogs</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 rounded-md pb-5">
        {blogs.map((blog) => (
          <div
            key={blog.name}
            className="dark:bg-gray-900 rounded-md border border-gray-400 border-solid"
          >
            <div>
              <img
                className="rounded-t-md"
                src={blog.imageUrl}
                alt="img not found"
                style={{width:'100%'}}
              />
              <div className="px-1 py-2  border-t border-solid border-gray-600 dark:border-white">
                <Link href={`/posts/${blog.linkName}`}>
                  <div className="blogLink">{blog.name}</div>
                </Link>
                <p className="dark:text-white text-xs py-1 text-gray-600 text-center">
                  {blog.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Blogs;
