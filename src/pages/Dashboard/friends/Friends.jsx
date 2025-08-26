import React, { useState } from "react";
import { FaEllipsisH } from "react-icons/fa";
import { UserPlus, Gift , UserStar , MessageSquarePlus , PartyPopper} from "lucide-react"; // Tab icons
import profile1 from "../../../assets/profile1.svg";
import profile2 from "../../../assets/profile2.svg";
import profile3 from "../../../assets/profile3.svg";

const Friends = () => {
  const [activeTab, setActiveTab] = useState("All Friends");

  const tabs = [
    { name: "All Friends", icon: UserStar },
    { name: "Friend Request", icon: MessageSquarePlus },
    { name: "Celebrations", icon: PartyPopper },
    
  ];

  const friendsData = {
    "All Friends": [
      { name: "Alison Jordon", level: 20, image: profile1 },
      { name: "John Doe", level: 15, image: profile2 },
      { name: "Jane Smith", level: 12, image: profile3 },
      { name: "Alison Jordon", level: 20, image: profile1 },
      { name: "John Doe", level: 15, image: profile2 },
      { name: "Jane Smith", level: 12, image: profile3 },
      { name: "Alison Jordon", level: 20, image: profile1 },
      { name: "John Doe", level: 15, image: profile2 },
      { name: "Jane Smith", level: 12, image: profile3 },
      { name: "Alison Jordon", level: 20, image: profile1 },
      { name: "John Doe", level: 15, image: profile2 },
      { name: "Jane Smith", level: 12, image: profile3 },
    ],
    "Friend Request": [
      { name: "Mark Spencer", level: 8, image: profile1 },
      { name: "Lucy Liu", level: 10, image: profile2 },
      { name: "Kevin Hart", level: 5, image: profile3 },
      { name: "Mark Spencer", level: 8, image: profile1 },
      { name: "Lucy Liu", level: 10, image: profile2 },
      { name: "Kevin Hart", level: 5, image: profile3 },
      { name: "Mark Spencer", level: 8, image: profile1 },
      { name: "Lucy Liu", level: 10, image: profile2 },
      { name: "Kevin Hart", level: 5, image: profile3 },
      { name: "Mark Spencer", level: 8, image: profile1 },
      { name: "Lucy Liu", level: 10, image: profile2 },
      { name: "Kevin Hart", level: 5, image: profile3 },
    ],
    Celebrations: [
      { name: "Alison Jordon", event: "Birthday", image: profile1 },
      { name: "John Doe", event: "Level Up", image: profile2 },
      { name: "Jane Smith", event: "Anniversary", image: profile3 },
      { name: "Alison Jordon", event: "Birthday", image: profile1 },
      { name: "John Doe", event: "Level Up", image: profile2 },
      { name: "Jane Smith", event: "Anniversary", image: profile3 },
      { name: "Alison Jordon", event: "Birthday", image: profile1 },
      { name: "John Doe", event: "Level Up", image: profile2 },
      { name: "Jane Smith", event: "Anniversary", image: profile3 },
      { name: "Alison Jordon", event: "Birthday", image: profile1 },
      { name: "John Doe", event: "Level Up", image: profile2 },
      { name: "Jane Smith", event: "Anniversary", image: profile3 },
    ],
  };

  return (
    <div className="container mx-auto p-4 bg-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">My Friends</h2>
        <button className="bg-[#704FE6] text-white px-4 py-2 h-11 w-36 rounded-md hover:bg-purple-700 transition">
          Add Friends
        </button>
      </div>

      {/* Tabs */}
      <div className="flex flex-col md:flex-row gap-6 mb-6 bg-[#F3F3FA] p-2 rounded-md  justify-center">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.name;
          return (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center gap-2 px-4 py-2 font-medium border-b-4 transition-colors ${
                isActive
                  ? "text-[#704FE6] border-[#704FE6]"
                  : "text-gray-600 border-transparent hover:text-[#704FE6] hover:border-[#704FE6]"
              }`}
            >
              <Icon
                className={
                  isActive
                    ? "text-[#704FE6]"
                    : "text-gray-400 hover:text-[#704FE6]"
                }
              />
              <span>{tab.name}</span>
            </button>
          );
        })}
      </div>

      {/* Friends Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {friendsData[activeTab].map((friend, index) => (
          <div
            key={index}
            className="flex flex-col bg-[#F3F3FA]  rounded-lg p-4 hover:shadow-md transition"
          >
            <div className="flex items-start justify-between">
              {/* Left: Profile Image */}
              <img
                src={friend.image}
                alt={friend.name}
                className="w-12 h-12 rounded-[12px] object-cover"
              />

              {/* Center: Name & Level */}
              <div className="flex-1 flex flex-col justify-start mx-4">
                <span className="font-bold text-gray-800">{friend.name}</span>
                {activeTab !== "Celebrations" && (
                  <span className="text-sm text-gray-500">
                    LVL {friend.level}
                  </span>
                )}
                {activeTab === "Celebrations" && (
                  <span className="text-sm text-green-600">{friend.event}</span>
                )}
              </div>

              {/* Right: Horizontal dots */}
              <div className="flex items-start">
                <FaEllipsisH className="text-gray-400 cursor-pointer mt-1" />
              </div>
            </div>

            {/* Confirm/Delete buttons below friend info for Friend Request */}
            {activeTab === "Friend Request" && (
              <div className="flex gap-2 mt-4">
                <button className="bg-[#704FE6] h-11 w-28 text-white px-2 py-1 rounded-[8px]  text-s">
                  CONFIRM
                </button>
                <button className="border-2 border-[#7A8B94] h-11 w-28 text-[#7A8B94] bg-transparent px-2 py-1 rounded-[8px] text-s">
                  DELETE
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Friends;
