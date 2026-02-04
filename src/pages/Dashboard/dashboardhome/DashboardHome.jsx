import React from "react";
import quiz from "../../../assets/quiz.png";
import profile from "../../../assets/profile1.svg"
import badge from "../../../assets/badge.svg"

const DashboardHome = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Grid with equal height for left and right */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        {/* ===== LEFT SIDE (2 cols) ===== */}
        <div className="lg:col-span-2 flex flex-col space-y-6">
          {/* Banner */}
          <div className="bg-[#EAF7E8] rounded-2xl p-6 shadow-md flex flex-col justify-between flex-1">
            {/* Top Section (Text Left + Image Right) */}
            <div className="flex justify-between items-center">
              {/* Left Side (Text + Button) */}
              <div className="max-w-lg">
                <p className="text-xs font-semibold text-[#5AAB61] uppercase mb-1">
                  Current Jobs Opening
                </p>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                  Fashion Designer
                </h1>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Punjab small industries corporation industries, commerce,
                  investment &amp; skills development department
                </p>
                <button className="px-5 py-2 bg-[#704FE6] text-white rounded-lg shadow hover:bg-[#5a3dc7]">
                  Enroll Now
                </button>
              </div>

              {/* Right Side (Illustration) */}
              <div className="w-28 h-28 md:w-36 md:h-36 flex-shrink-0">
                <img
                  src="/illustrations/fashion-designer.png"
                  alt="Fashion Designer"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Dots (Bottom) */}
            <div className="flex space-x-1 mt-6">
              <span className="w-2 h-2 bg-[#704FE6] rounded-full"></span>
              <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
              <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
              <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            </div>
          </div>

          {/* Overview Section */}
          <div className="flex-1">
            <h2 className="text-lg font-semibold mb-4">Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-4 shadow-md flex flex-col justify-between">
                <p className="text-sm text-gray-600">Total Courses Enrolled</p>
                <h3 className="text-2xl font-bold text-[#704FE6]">08</h3>
                <img
                  src="/illustrations/books.png"
                  alt="Courses"
                  className="w-16 mt-4 self-end"
                />
              </div>

              {/* Card 2 */}
              <div className="bg-blue-100 rounded-xl p-4 shadow-md flex flex-col justify-between">
                <p className="text-sm text-gray-600">Overall Performance</p>
                <h3 className="text-2xl font-bold text-blue-600">90%</h3>
                <img
                  src="/illustrations/performance.png"
                  alt="Performance"
                  className="w-16 mt-4 self-end"
                />
              </div>

              {/* Card 3 */}
              <div className="bg-green-100 rounded-xl p-4 shadow-md flex flex-col justify-between">
                <p className="text-sm text-gray-600">Overall Deficiency</p>
                <h3 className="text-2xl font-bold text-green-600">20%</h3>
                <p className="text-xs text-gray-500 mt-1">
                  Maths: 15% <br /> G Knowledge: 25%
                </p>
                <img
                  src="/illustrations/question.png"
                  alt="Deficiency"
                  className="w-16 mt-4 self-end"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ===== RIGHT SIDE ===== */}
        <div className="flex flex-col space-y-6 h-full">
          {/* Daily Updates */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex-1">
            <h3 className="text-lg font-semibold mb-4">Daily Updates</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex justify-between">
                <span>Upcoming Quiz</span>
                <span className="text-gray-500">10:20 AM</span>
              </li>
              <li className="flex justify-between">
                <span>Ali Hassan Send Request</span>
                <span className="text-red-500 font-medium">View Now</span>
              </li>
              <li className="flex justify-between">
                <span>Course Enroll Last Date</span>
                <span className="text-gray-500">1-20-2024</span>
              </li>
              <li className="flex justify-between">
                <span>General Science Quiz</span>
                <span className="text-gray-500">10:20 AM</span>
              </li>
            </ul>
          </div>

          {/* Achievements */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex-1">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600">234,89</span>
              <span className="font-semibold text-yellow-600">COINS WIN</span>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600">325,9</span>
              <span className="font-semibold text-orange-500">DIAMOND WIN</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">222</span>
              <span className="font-semibold text-blue-500">PROFILE SKIN</span>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Quizzes + Performance Section ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* Quizzes Section */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Course Progress</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((quiz, idx) => (
              <div
                key={idx}
                className="bg-[#F9F9FF] rounded-xl p-4 shadow flex flex-col"
              >
                {/* Top Row: Icon + Menu */}
                <div className="flex justify-between items-start mb-3">
                  <div className="w-10 h-10 bg-[#704FE6]/10 flex items-center justify-center rounded-lg">
                    <img
                      src="/icons/quiz.png"
                      alt="quiz-icon"
                      className="w-6 h-6"
                    />
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    ⋮
                  </button>
                </div>

                {/* Title */}
                <h4 className="text-sm font-semibold text-gray-800 mb-2">
                  General Science Quiz
                </h4>

                {/* Progress Bar */}
                <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-5">
                  <div
                    className="absolute top-0 left-0 h-full bg-[#704FE6]"
                    style={{ width: "15%" }} // example progress
                  ></div>
                </div>

                {/* Progress Label */}
                <p className="text-xs text-gray-500 text-right">15 / 100%</p>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Section */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold mb-4">Performance</h3>
          {/* Circle Progress (Pure Tailwind + SVG) */}
          <div className="relative w-40 h-40">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                stroke="#E5E7EB"
                strokeWidth="12"
                fill="none"
              />
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                stroke="#704FE6"
                strokeWidth="12"
                strokeLinecap="round"
                fill="none"
                strokeDasharray="283"
                strokeDashoffset={283 - (283 * 75) / 100} // 75% progress
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-bold text-[#704FE6]">75%</span>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600">Overall Performance</p>
        </div>
      </div>
      {/* ==== NEW BIG SECTION ==== */}
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* ===== LEFT SIDE (2 cols) ===== */}
        <div className="lg:col-span-2 space-y-6">
          {/* === Question of the Day === */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Question of the Day</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[1, 2, 3].map((q, idx) => (
                <div
                  key={idx}
                  className="bg-[#F9F9FF] rounded-xl p-4 shadow flex flex-col"
                >
                  <p className="text-sm font-semibold text-gray-700 mb-2">
                    Question {q}
                  </p>
                  <p className="text-xs text-gray-500 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <button className="px-4 py-2 bg-[#704FE6] text-white text-xs rounded-lg mt-auto">
                    View Answer
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* ==== Leaderboard Cards ==== */}
               <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 bg-[#F3F3FA] p-4 rounded-[12px]">
                 {[1, 2, 3, 4, 5, 6].map((player, idx) => (
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
          {/* === Weekly Progress === */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h4 className="font-semibold mb-6">My Last Week Progress</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Left: Progress Rings */}
              <div className="flex justify-center">
                <div className="relative w-44 h-44">
                  <svg className="w-full h-full -rotate-90">
                    {/* Base Circle */}
                    <circle
                      cx="50%"
                      cy="50%"
                      r="70"
                      stroke="#E5E7EB"
                      strokeWidth="10"
                      fill="none"
                    />

                    {/* Completed */}
                    <circle
                      cx="50%"
                      cy="50%"
                      r="70"
                      stroke="#8B5CF6" // purple
                      strokeWidth="10"
                      fill="none"
                      strokeDasharray="440"
                      strokeDashoffset={440 - (440 * 30) / 100}
                      strokeLinecap="round"
                    />

                    {/* In Progress */}
                    <circle
                      cx="50%"
                      cy="50%"
                      r="55"
                      stroke="#22C55E" // green
                      strokeWidth="10"
                      fill="none"
                      strokeDasharray="345"
                      strokeDashoffset={345 - (345 * 36) / 100}
                      strokeLinecap="round"
                    />

                    {/* Not Started */}
                    <circle
                      cx="50%"
                      cy="50%"
                      r="40"
                      stroke="#EF4444" // red
                      strokeWidth="10"
                      fill="none"
                      strokeDasharray="251"
                      strokeDashoffset={251 - (251 * 36) / 100}
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Right: Stats */}
              <div className="space-y-6">
                <div>
                  <p className="text-xl font-semibold">12 h 12 min</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">
                    Last Week Total Hours
                  </p>
                </div>

                {/* Legend */}
                <div className="space-y-3 flex items-center gap-7">
                  <div className="flex flex-col items-center gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                      <div className="font-medium text-gray-700">18/60</div>
                    </div>
                    <span className="text-gray-500">Completed</span>
                  </div>

                  <div className="flex flex-col items-center gap-3 text-sm">
                    <div className="flex gap-2 items-center">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <div className="font-medium text-gray-700">22/60</div>
                    </div>
                    <span className="text-gray-500">In Progress</span>
                  </div>

                  <div className="flex flex-col items-center gap-3 text-sm mb-[13px]">
                    <div className="items-center flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="font-medium text-gray-700">22/60</div>
                    </div>
                    <span className="text-gray-500">Not Started</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== RIGHT SIDE (1 col) ===== */}
        <div className="space-y-6">
          {/* === My Friends === */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">My Friends</h3>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5, 6].map((friend, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between bg-[#F9F9FF] p-3 rounded-xl shadow"
                >
                  {/* Left: Avatar + Name */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center">
                      <img
                        src={profile}
                        alt="friend"
                        className="w-6 h-6"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">
                        Friend {friend}
                      </p>
                      <p className="text-xs text-gray-500">Level {friend}</p>
                    </div>
                  </div>
                  {/* Right Arrow */}
                  <span className="text-gray-400">→</span>
                </div>
              ))}
            </div>
          </div>

          {/* === Upcoming Activities === */}
          <div className="bg-[#F7F8FC] rounded-2xl p-6 w-full max-w-sm">
            <h3 className="text-xs font-semibold text-gray-500 uppercase mb-4">
              Upcoming Activities
            </h3>

            {/* Search */}
            <div className="relative mb-5">
              <input
                type="text"
                placeholder="Search Here"
                className="w-full pl-4 pr-10 py-2 text-sm rounded-full bg-white border border-gray-200 focus:outline-none"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500">
                🔍
              </span>
            </div>

            {/* Activity List */}
            <div className="space-y-4">
              {[
                { title: "Math Quiz", type: "Quiz" },
                {
                  title: "Data Science",
                  type: "Assignment",
                },
                { title: "Python", type: "Webinar" },
                {
                  title: "Data Science",
                  type: "Assignment",
                },
                { title: "Math Quiz", type: "Quiz" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  {/* Left */}
                  <div className="flex items-center gap-3">
                    <img
                      src={quiz}
                      alt="activity"
                      className="w-10 h-10 rounded-full object-cover"
                    />

                    <div>
                      <p className="text-sm font-semibold text-gray-800 leading-tight">
                        {item.title}
                      </p>
                      <p className="text-[10px] uppercase tracking-wide text-gray-400">
                        {item.type}
                      </p>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="flex flex-col-reverse items-center gap-3 text-xs text-gray-400">
                    <div>5th Jan</div>
                    <button className="text-gray-400 hover:text-gray-600 text-lg leading-none">
                      ⋯
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
