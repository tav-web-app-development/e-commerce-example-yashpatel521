import React from "react";
import Image from "next/image";
import cart from "../../../public/cart.png";

const Hero = () => {
  return (
    <div
      className="bg-gradient-to-r from-black to-gray-800 flex text-white p-10"
      style={{ height: "calc(100vh - 80px)" }}
    >
      <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4">
        <h1 className="text-5xl font-bold">Welcome to Our Ecommerce Store</h1>
        <p className="text-xl">Find the best products at the best prices</p>
        <button className="bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded transition duration-200 ease-in-out">
          Shop Now
        </button>
      </div>
      <div className="flex-1 relative">
        <Image src={cart} alt="Ecommerce" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default Hero;
