// src/pages/dashboard/friends/FriendDetail.jsx
import React from "react";
import bgimg from "../../../assets/course1.svg"

const FriendDetail = ({ friend }) => {
  if (!friend) return <p>No friend selected</p>;

  return (
    <div className="w-full">
      {/* Cover Image */}
      <div
  className="relative h-40 md:h-56 rounded-xl bg-cover bg-center"
  style={{ backgroundImage: `url(${bgimg})` }}
>
  {/* Profile Image */}
  <div className="absolute -bottom-12 left-6">
    <img
      src={friend.image}
      alt={`${friend.name} profile`}
      className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
    />
  </div>
</div>


      {/* Profile Info */}
      <div className=" rounded-b-xl  p-6 mt-14">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Left side */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{friend.name}</h2>
            <p className="text-[#704FE6] font-semibold">{friend.level} LEVEL</p>
            <p className="text-gray-500 text-sm">
              {friend.location || "Islamabad, Pak"} •{" "}
              {friend.timestamp || "14 Hours Ago"}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-4 md:mt-0">
            <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
              CONFIRM
            </button>
            <button className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
              MESSAGE
            </button>
          </div>
        </div>

        {/* About Section */}
        <div className="mt-6 bg-[#F3F3FA] p-3 rounded-xl">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            About Us
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {friend.bio ||
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FriendDetail;
