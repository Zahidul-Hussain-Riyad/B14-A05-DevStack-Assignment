import React from "react";
import banner from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="max-w-7xl mx-auto mt-6 border border-dotted border-blue-400">

      <div className="flex flex-col lg:flex-row items-center justify-between px-8 py-10 lg:px-10 lg:py-12">

        {/* Left Side - Content */}
        <div className="w-full lg:w-1/2">

          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight text-slate-900">Build Your Ideal
            <br /><span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack</span>
          </h1>
          <p className="mt-5 max-w-xl text-gray-600 leading-6">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits
            your next project.
          </p>

          {/* Buttons */}
          <div className="flex gap-3 mt-8">
            <button className="btn bg-gradient-to-r from-orange-500 to-pink-500 text-white border-none">
              Explore Technologies
            </button>
            <button className="btn btn-outline border-gray-300 text-gray-600">
              Learn More
            </button>
          </div>

        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
          <img
            src={banner}
            alt="Development Stack"
            className="w-64 md:w-72 lg:w-80"
          />
        </div>

      </div>

    </section>
  );
};

export default Banner;