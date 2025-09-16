import React, { useState } from "react";
import profile from "../../../assets/profile1.svg"
import badge from "../../../assets/badge.svg"

const Leaderboard = () => {
  const [activeTab, setActiveTab] = useState("course");
  const [timeFilter, setTimeFilter] = useState("monthly");
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div className=" rounded-2xl  p-6">
      <h1 className="font-bold text-xl mb-2">Leaderboard</h1>
      {/* ==== Top Tabs & Filter ==== */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2 ">
        {/* Tabs */}
        <div className="flex gap-4 mb-4 sm:mb-0 bg-[#F3F3FA] p-3 rounded-[12px] w-full">
          {["course", "subject", "job"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-md font-semibold pb-1 border-b-3 transition ${
                activeTab === tab
                  ? "text-[#704FE6] border-[#704FE6]"
                  : "text-gray-500 border-transparent hover:text-gray-700"
              }`}
            >
              By {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Dropdown Filter */}
        <div className="relative">
          <button
            onClick={() => setOpenDropdown(!openDropdown)}
            className="p-4 bg-gray-100 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-gray-200"
          >
            {timeFilter.charAt(0).toUpperCase() + timeFilter.slice(1)}
            <svg
              className={`w-4 h-4 transition-transform ${
                openDropdown ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {openDropdown && (
            <div className="absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-md z-10">
              {["monthly", "weekly", "daily"].map((option) => (
                <div
                  key={option}
                  onClick={() => {
                    setTimeFilter(option);
                    setOpenDropdown(false);
                  }}
                  className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 ${
                    timeFilter === option ? "text-[#704FE6] font-semibold" : "text-gray-600"
                  }`}
                >
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ==== Leaderboard Cards ==== */}
      <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 bg-[#F3F3FA] p-4 rounded-[12px]">
        {[1, 2, 3, 4, 5, 6, 7, 8 , 9 , 10 , 11 , 12 , 13 , 14 , 14 , 16 , 17 , 18 , 19 , 20 ].map((player, idx) => (
          <div
            key={idx}
            className="bg-[#F9F9FF] rounded-xl p-4 shadow flex flex-col items-center gap-2 w-44"
          >
            {/* Avatar */}
            <div className=" rounded-full flex items-center justify-center mb-2">
              <img src={profile} alt="avatar" className="w-12 h-12" />
            </div>
            {/* Name + Level */}
            <p className="text-sm font-semibold text-gray-700">
              Stephen Grant {player}
            </p>
           
            {/* Coins */}
            <div className="flex items-center gap-1 text-yellow-500 text-xs">
              <img src={badge} alt="coin" className="w-4 h-4" />
               <p className="text-xs text-gray-500 mb-1"> {player} LVL</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
