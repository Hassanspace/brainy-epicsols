import React, { useState } from "react";
import {
  Home,
  BookMarked,
  BookOpen,
  Lightbulb,
  BriefcaseBusiness,
  Trophy,
  BarChart3,
  WandSparkles,
  Crown,
  Bolt,
} from "lucide-react";
import { FaUserFriends } from "react-icons/fa";

import DashboardHome from "./dashboardhome/DashboardHome";
import AvailableCourses from "./availablecourses/AvailableCourses";
import MyCourses from "./mycourses/MyCourses";
import Quizzes from "./quizzes/Quizzes";
import Friends from "./friends/Friends";
import Leaderboard from "./leaderboard/Leaderboard";
import CurrentJob from "./currentjob/CurrentJob";
import PerformanceReport from "./performancereport/PerformanceReport";
import BrainyAi from "./brainyai/BrainyAi";

import SubscriptionSetting from "./subscriptionsetting/SubscriptionSetting";
import Setting from "./setting/Setting";

import profile from "../../assets/user.svg";
import profilelvl from "../../assets/profilelevel.svg";
import HR from "../../assets/HR.svg";
import rocket from "../../assets/rocket.svg";
import logo from "../../assets/BRAINY.svg";
import messageicon from "../../assets/messages.svg";
import notificationicon from "../../assets/notification.svg";
import settingicon from "../../assets/setting.svg";
import lvl from "../../assets/lvl.svg"
import exp from "../../assets/exp.svg"
import crs from "../../assets/crs.svg"

const tabComponents = {
  Dashboard: <DashboardHome />,
  "Available Courses": <AvailableCourses />,
  "My Courses": <MyCourses />,
  Quizzes: <Quizzes />,
  Friends: <Friends />,
  Leaderboard: <Leaderboard />,
  "Current Job": <CurrentJob />,
  "Performance Report": <PerformanceReport />,
  "Brainy AI": <BrainyAi />,
  "Subscription Setting": <SubscriptionSetting />,
  Setting: <Setting />,
};

const tabIcons = {
  Dashboard: Home,
  "Available Courses": BookMarked,
  "My Courses": BookOpen,
  Quizzes: Lightbulb,
  Friends: FaUserFriends,
  Leaderboard: Trophy,
  "Current Job": BriefcaseBusiness,
  "Performance Report": BarChart3,
  "Brainy AI": WandSparkles,
  "Subscription Setting": Crown,
  Setting: Bolt,
};

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Top Navbar */}
      <header className="flex items-center justify-between bg-white px-4 h-20 border-b border-[#DDDDDD] overflow-hidden">
  {/* Hamburger for mobile */}
  <button
    className="md:hidden text-gray-700 text-2xl"
    onClick={() => setSidebarOpen(!sidebarOpen)}
  >
    ☰
  </button>

  {/* Logo */}
  <div className="flex-1 flex justify-center md:justify-start items-center min-w-0">
    <img className="w-24 sm:w-28 md:w-32 max-w-full" src={logo} alt="Brainy Logo" />
  </div>

  {/* Chat with Brainy AI */}
<div className="hidden md:flex flex-shrink-0 justify-center">
  <div className="brainyai md:mr-25 mr-0 rounded-full flex items-center justify-center text-white text-sm sm:text-base lg:text-lg py-2 
                  w-[300px] md:w-[400px] lg:w-[700px]">
    Chat with Brainy AI
  </div>
</div>


  {/* Icons */}
  <div className="flex items-center space-x-2 sm:space-x-4 min-w-0">
    <img
      src={messageicon}
      alt="Messages"
      className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 flex-shrink-0"
    />
    <img
      src={notificationicon}
      alt="Notifications"
      className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 flex-shrink-0"
    />
    <img
      src={settingicon}
      alt="Settings"
      className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 flex-shrink-0"
    />
    <div className="flex justify-center items-center gap-1 h-8 sm:h-10 md:h-12 bg-[#F3F3FA] rounded-full px-2 sm:px-3 md:px-4 flex-shrink-0">
      <img
        className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 rounded-full"
        src={profile}
        alt="Profile"
      />
      <p className="text-xs sm:text-sm md:text-base truncate max-w-[60px] md:max-w-[100px]">Alison</p>
    </div>
  </div>
</header>


      {/* Main Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-[#DDDDDD] transform transition-transform duration-300 flex-col overflow-y-auto
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:static md:translate-x-0 md:flex`}
        >
          {/* Navigation */}
          <nav className="p-4 space-y-4">
            <div className="block md:hidden lg:hidden justify-center ">
          <div className="brainyai rounded-full flex items-center justify-center text-white text-sm sm:text-base lg:text-lg px-3 sm:px-4 py-2">
            Chat with Brainy AI
          </div>
        </div>
            <h1 className="text-gray-600">OVERVIEW</h1>
            {Object.keys(tabComponents).map((tab) => {
              const isActive = activeTab === tab;
              const Icon = tabIcons[tab];

              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`w-full h-12 flex items-center gap-3 px-3 py-2 rounded-tl-md rounded-bl-md font-medium transition-colors ${
                    isActive
                      ? "bg-[#ECFFF3] border-r-4 text-[#25D366]"
                      : "hover:bg-gray-200 text-gray-800"
                  }`}
                >
                  {Icon && <Icon className={`w-5 h-5 ${isActive ? "text-[#25D366]" : "text-black"}`} />}
                  <span>{tab}</span>
                </button>
              );
            })}
          </nav>

          {/* Profile Card */}
           {/* Profile card */}
          <div className="p-4 ">
           
            {/* Gradient border wrapper */}
            <div className="relative max-w-3xl rounded-xl bg-gradient-to-br from-[#25D366] to-[#704FE6] p-[2px]">
                 <img className="absolute top-[-6%] right-[-2%] w-14" src={rocket} alt="" />
              {/* Inner content with its own gradient background */}
              <div className="rounded-xl bg-gradient-to-b from-[#ECFFF3] to-[#EFEBFF] p-4 text-center shadow-lg">
                <div className="flex justify-center items-start gap-1 mr-[40px]">
                  <div>
                    <img src={profile} alt="" />
                  </div>
                  <div className="flex flex-col justify-center items-start">
                    <div className="font-bold text-gray-800 text-xl">
                      Alison Jordon
                    </div>
                    <div className="text-sm text-gray-500">20 Level</div>
                  </div>
                </div>

                <div className="mt-4 bg-white rounded-[12px]">
                  <div className="w-20 h-20 mx-auto mt-2 flex items-center justify-center ">
                    <img src={profilelvl} alt="" />
                  </div>
                  <div className="text-sm text-gray-600 mt-1 p-1">
                    15% To Reach New Level
                  </div>
                </div>

                {/* Stats */}
                <div className="flex justify-between text-sm mt-6 gap-1">
                  <div className="text-center ">
                    <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center">
                      {" "}
                      <img className="w-4.5 h-4.5" src={HR} alt="" />
                    </div>
                    <p className="">HR</p>
                  </div>
                  <div className="text-center ">
                    <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center">
                      {" "}
                      <img className="w-4.5 h-4.5" src={lvl} alt="" />
                    </div>
                    <p className="">LVL</p>
                  </div>
                  <div className="text-center ">
                    <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center">
                      {" "}
                      <img className="w-4.5 h-4.5" src={exp} alt="" />
                    </div>
                    <p className="">EXP</p>
                  </div>
                  <div className="text-center ">
                    <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center">
                      {" "}
                      <img className="w-4.5 h-4.5" src={crs} alt="" />
                    </div>
                    <p className="">CRS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay for mobile when sidebar is open */}
        {sidebarOpen && <div className="fixed inset-0 z-40 bg-black opacity-30 md:hidden" onClick={() => setSidebarOpen(false)} />}

        {/* Main content */}
        <main className="flex-1 overflow-auto p-6 bg-white">{tabComponents[activeTab]}</main>
      </div>
    </div>
  );
};

export default Dashboard;
