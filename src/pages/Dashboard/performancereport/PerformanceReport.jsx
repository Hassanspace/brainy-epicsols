import React from "react";
import image1 from "../../../assets/performance1.svg"; // Replace with your actual images
import image2 from "../../../assets/performance2.svg";

const PerformanceReport = () => {
  return (
    <div className="w-full flex flex-col items-start  py-8">
      {/* Heading */}
      <h2 className="text-2xl font-bold mb-8 text-start ">Performance Report</h2>

      {/* Images in column */}
      <div className="flex flex-col items-center w-full gap-6">
        <img
          src={image1}
          alt="Performance 1"
          className="w-full max-w-full object-contain "
        />
        <img
          src={image2}
          alt="Performance 2"
          className="w-full max-w-full object-contain"
        />
      </div>
    </div>
  );
};

export default PerformanceReport;
