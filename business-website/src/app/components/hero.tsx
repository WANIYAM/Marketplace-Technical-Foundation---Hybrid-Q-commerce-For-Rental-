import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#2A254B]">
      <div className="flex flex-col md:flex-row items-center min-h-[580px]">
        {/* Left Section */}
        <div className="w-full md:w-[60%] text-white px-8 md:px-12 py-12 md:py-16">
        <h2 className="font-clash-display text-2xl md:text-3xl font-normal leading-[44.8px] text-left ">
  The furniture brand for the <br /> future, with timeless designs
</h2>
          <button className="bg-transparent border border-gray-400 text-white font-semibold px-6 py-3 rounded-md hover:bg-gray-700 transition">
            View collection
          </button>
          <p className="text-gray-300 mt-16 leading-relaxed text-left font-satoshi text-lg font-normal">
    A new era in eco-friendly furniture with Avion, the French luxury retail brand
    with nice fonts, tasteful colors, and a beautiful way to display things digitally
    using modern web technologies.
</p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-[40%] bg-[#A3C9C9] flex justify-center items-center min-h-[580px]">
          <Image
            src="/images/right.png" 
            alt="Chair Design"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
