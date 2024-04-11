"use client";
import React from "react";
import Image from "next/image";

const StudentLoginForm = () => {
  return (
    <form className="my-6 py-4 flex flex-col gap-6">
      <input
        type="email"
        placeholder="Your Email Address"
        className="py-2 px-4 w-1/2 border-none outline-none  rounded-full focus:ring-offset-4 ring-1 click:outline-none transition-all duration-300"
      ></input>
      <div className="relative">
        <input
          type="password"
          placeholder="Your Password"
          className="py-2 px-4 w-1/2 border-none outline-none  rounded-full focus:ring-offset-4 ring-1 click:outline-none transition-all duration-300"
        ></input>
        <button
          onClick={(e) => e.preventDefault()}
          className="right-1/2 mr-3 bottom-1/2 absolute top-1/4"
        >
          <Image src="/show.png" width={20} height={20} />
        </button>
      </div>
      <button
        onClick={(e) => e.preventDefault()}
        className="font-bold mt-4 text-center px-6 py-2 text-white rounded-full bg-indigo-600 w-28 hover:ring-2 hover:bg-white hover:text-indigo-600 hover:ring-offset-5 transition-all duration-300"
      >
        Login
      </button>
    </form>
  );
};

export default StudentLoginForm;
