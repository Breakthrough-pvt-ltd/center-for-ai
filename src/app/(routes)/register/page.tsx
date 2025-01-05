import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoDiamondSharp } from "react-icons/io5";

const RegistrationPage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center bg-gradient-bg min-h-screen text-white">
      {/* Main Content */}
      <div className="text-center space-y-6 pt-20 sm:pt-28">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-text-gradient-register">
          Centre for AI
        </h1>
        <p className="text-xl sm:text-2xl md:text-4xl font-semibold leading-tight bg-clip-text text-transparent bg-text-gradient-register-sub pb-2">
          Advancing innovation, collaboration,
        </p>
        <p className="text-xl sm:text-2xl md:text-4xl font-semibold leading-tight bg-clip-text text-transparent bg-text-gradient-register pb-5 !mt-0">
          and learning in AI.
        </p>
      </div>

      {/* Register Button */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pb-40">
        <Link
          href="/sign-up"
          aria-label="Register for Centre for AI"
          className="bg-card-gradient-bg-sub text-white flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-2xl font-medium transition-transform duration-300 shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-card-gradient-bg-sub"
        >
          Register
          <IoDiamondSharp />
        </Link>
      </div>

      {/* Images Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 px-4 sm:px-6 md:px-20">
        {/* Image 1 */}
        <div className="p-2 sm:p-4 rounded-lg shadow-lg pb-20 sm:pb-28 animate-bounceIn">
          <Image
            src="/register_1.png"
            alt="AI visual"
            className="w-full h-full object-cover rounded-lg"
            width={568}
            height={824}
          />
        </div>

        {/* Image 2 */}
        <div className="p-2 sm:p-4 rounded-lg shadow-lg pt-20 sm:pt-28 animate-bounceIn">
          <Image
            src="/register_2.png"
            alt="AI visual"
            className="w-full h-full object-cover rounded-lg"
            width={284}
            height={412}
          />
        </div>

        {/* Image 3 */}
        <div className="p-2 sm:p-4 rounded-lg shadow-lg pt-20 sm:pt-28 animate-bounceIn">
          <Image
            src="/register_3.png"
            alt="AI visual"
            className="w-full h-full object-cover rounded-lg"
            width={284}
            height={412}
          />
        </div>

        {/* Image 4 */}
        <div className="p-2 sm:p-4 rounded-lg shadow-lg pb-20 sm:pb-28 animate-bounceIn">
          <Image
            src="/register_4.png"
            alt="AI visual"
            className="w-full h-full object-cover rounded-lg"
            width={284}
            height={412}
          />
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
