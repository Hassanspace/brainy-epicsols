import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center "
      style={{ backgroundImage: "url('/your-banner.jpg')" }}
    >
      <Navbar />

      {/* Overlay (optional, for darker effect on image) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Page content */}
      <section className="absolute bottom-16  z-10 ">
        <div className="max-w-3xl text-left">
          {/* Small Badge */}
          <span className="inline-block backdrop-blur-[32px]  text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
            BRAINY
          </span>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
            Prepare Smarter, Not Harder!
          </h1>

          {/* Subheading */}
          <p className="mt-4 text-lg text-gray-200">
            Gamify your preparation for{" "}
            <span className="font-semibold">CSS, PMS, PPSC, FPSC</span>, and
            more.
          </p>

          <div className="mt-6 w-full flex items-end">
            {/* Left button group */}
            <div>
              <button className="bg-[#25D366] hover:bg-[#10c050] text-white font-medium px-6 py-3 rounded-[12px] shadow-md transition">
                START YOUR JOURNEY NOW
              </button>
            </div>

            {/* Right button group */}
            <div className="ml-auto space-x-3">
              <button className="border px-4 py-2 rounded-md">Left</button>
              <button className="border px-4 py-2 rounded-md">Right</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
