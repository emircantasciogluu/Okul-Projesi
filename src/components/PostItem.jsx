import React from "react";
import { Link } from "react-router-dom";

const PostItem = () => {
  return (
    <div className="bg-slate-200 rounded-2xl shadow-lg flex flex-col gap-5 ">
      <div>
        <img
          src="/postImg.png"
          alt=""
          className="w-full rounded-t-2xl object-cover"
        />
      </div>
      <div className="px-2 py-2">
        <div className="flex flex-row items-center justify-left ml-2 mb-4 gap-2 text-xs">
          <div className="bg-blue-100 text-blue-500 border border-blue-400 px-4 py-2 rounded-full font-bold">
            Front-end
          </div>
          <div className="bg-blue-100 text-blue-500 border border-blue-400 px-4 py-2 rounded-full font-bold">
            Front-end
          </div>
        </div>
        <div className="flex flex-col gap-3 ml-4">
          <h1 className="font-bold text-xl">Lorem, ipsum dolor.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
            assumenda impedit distinctio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
