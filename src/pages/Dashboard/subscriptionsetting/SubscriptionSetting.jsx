import React from "react";
import { ChevronRight } from "lucide-react";

const SubscriptionSetting = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Subscription Settings</h2>

      <div className="space-y-8">
        {/* Current Plan */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Current Plan</h3>
          <div className="bg-[#F3F3FA] rounded-xl  p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between hover:shadow-lg transition">
            <div>
              <div className="text-[#30303D] font-bold uppercase tracking-wide">Single User</div>
              <div className="text-2xl font-bold text-green-500 mt-2 flex items-center justify-center">
                <span className="text-sm relative -top-2">PKR</span>

 <h1 className="text-5xl">1500</h1> <h1 className="text-sm relative -bottom-2  font-normal text-green-500">/MONTH</h1>
              </div>
            </div>
            <button className="flex h-14 w-44 rounded-[12px] items-center justify-center bg-green-500 text-white font-semibold py-2 px-5  hover:bg-green-600 focus:outline-none transition mt-4 sm:mt-0">
              Upgrade Plan 
            </button>
          </div>
        </div>

        {/* Credits */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Credits</h3>
          <div className="bg-[#F3F3FA] rounded-xl  p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between hover:shadow-lg transition">
            <div>
              <div className="text-[#30303D] text-lg font-bold">
                Limited daily use of generative AI and editing tools
              </div>
            </div>
            <button className="flex  h-14 w-44 rounded-[12px] items-center justify-center bg-[#704FE6] text-white font-semibold py-2 px-5  hover:bg-purple-700 focus:outline-none transition mt-4 sm:mt-0">
              See Pricing Plan 
            </button>
          </div>
        </div>

        {/* Billing Information */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Billing Information</h3>
          <div className="bg-[#F3F3FA] rounded-xl  p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between hover:shadow-lg transition">
            <div>
              <div className="text-[#30303D] font-bold text-sm">info24@gmail.com</div>
            </div>
            <button className="flex  h-14 w-44 rounded-[12px] items-center justify-center bg-[#075E54] text-white font-semibold py-2 px-5  hover:bg-green-900 focus:outline-none transition mt-4 sm:mt-0">
              Billing History 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionSetting;
