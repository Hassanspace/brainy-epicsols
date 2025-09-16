import React, { useState } from "react";
import { Bookmark } from "lucide-react"; // Save/Bookmark icon

const CurrentJob = ({ onJobClick }) => {
  const [activeTab, setActiveTab] = useState("Current Jobs");

  const tabs = ["Current Jobs", "Upcoming Jobs"];

  const jobsData = {
    "Current Jobs": [
      {
        id: "1",
        title: "Frontend Developer",
        company: "TechCorp",
        location: "Islamabad, PK",
        posted: "2 days ago",
        logo: "/images/company1.png",
        salary: "80,000 PKR",
        skills: ["React", "Tailwind", "JavaScript","React", "Tailwind", "JavaScript"],
        description:
          "We are looking for a skilled frontend developer to join our team and work on exciting projects.",
      },
      {
        id: "2",
        title: "Backend Developer",
        company: "SoftWorks",
        location: "Lahore, PK",
        posted: "1 week ago",
        logo: "/images/company2.png",
        salary: "90,000 PKR",
        skills: ["Node.js", "Express", "MongoDB" , "React", "Tailwind", "JavaScript"],
        description:
          "Backend developer required for scalable applications and APIs.",
      },
       {
        id: "2",
        title: "Backend Developer",
        company: "SoftWorks",
        location: "Lahore, PK",
        posted: "1 week ago",
        logo: "/images/company2.png",
        salary: "90,000 PKR",
        skills: ["Node.js", "Express", "MongoDB" , "React", "Tailwind", "JavaScript"],
        description:
          "Backend developer required for scalable applications and APIs.",
      },
      {
        id: "2",
        title: "Backend Developer",
        company: "SoftWorks",
        location: "Lahore, PK",
        posted: "1 week ago",
        logo: "/images/company2.png",
        salary: "90,000 PKR",
        skills: ["Node.js", "Express", "MongoDB" , "React", "Tailwind", "JavaScript"],
        description:
          "Backend developer required for scalable applications and APIs.",
      },
      {
        id: "2",
        title: "Backend Developer",
        company: "SoftWorks",
        location: "Lahore, PK",
        posted: "1 week ago",
        logo: "/images/company2.png",
        salary: "90,000 PKR",
        skills: ["Node.js", "Express", "MongoDB" , "React", "Tailwind", "JavaScript"],
        description:
          "Backend developer required for scalable applications and APIs.",
      },
      
    ],
    "Upcoming Jobs": [
      {
        id: "3",
        title: "UI/UX Designer",
        company: "Creative Minds",
        location: "Karachi, PK",
        posted: "Coming Soon",
        logo: "/images/company3.png",
        salary: "70,000 PKR",
        skills: ["Figma", "Adobe XD", "Design Thinking" , "React", "Tailwind", "JavaScript"],
        description:
          "Upcoming position for a creative UI/UX designer passionate about user experiences.",
      },
    ],
  };

  return (
    <div className="p-4  rounded-lg">
      {/* Header */}
      <h2 className="text-2xl font-bold mb-4">Jobs</h2>

      {/* Tabs */}
      <div className="flex gap-4 mb-6 bg-[#F3F3FA] p-2 rounded-md justify-center">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-medium border-b-4 transition-colors ${
              activeTab === tab
                ? "text-[#704FE6] border-[#704FE6]"
                : "text-gray-600 border-transparent hover:text-[#704FE6] hover:border-[#704FE6]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Jobs List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobsData[activeTab].map((job) => (
          <div
            key={job.id}
            className="flex flex-col bg-transparent border-none  rounded-lg  transition overflow-hidden p-3 gap-3 "
          >
            {/* Card Body */}
            <div className="flex-1 p-4 bg-[#FFFFFF]  border-[1px] border-[#DDDDDD] rounded-[16px] mt-3">
              {/* Top row: posted + save */}
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs text-gray-400">{job.posted}</span>
                <Bookmark className="w-5 h-5 text-gray-400 hover:text-[#704FE6] cursor-pointer" />
              </div>

              {/* Job title */}
              <h3 className="text-lg font-semibold text-start mb-4">
                {job.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap justify-start gap-2">
                {job.skills.map((skill, idx) => {
                  // color palette
                  const colors = [
                    "bg-purple-100 text-purple-700",
                    "bg-pink-100 text-pink-700",
                    "bg-blue-100 text-blue-700",
                    "bg-green-100 text-green-700",
                    "bg-yellow-100 text-yellow-700",
                    "bg-red-100 text-red-700",
                  ];

                  const colorClass = colors[idx % colors.length]; // cycle through colors

                  return (
                    <span
                      key={idx}
                      className={`px-3 py-1 text-xs font-medium rounded-full ${colorClass}`}
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Separate Footer with Button */}
            <div className="p-3 bg-[#FFFFFF]  border-[1px] border-[#DDDDDD] rounded-[16px] cursor-pointer">
              <button
                onClick={() => onJobClick(job.id)}
                className="w-full cursor-pointer text-[#787878] font-semibold py-2 rounded-md  transition"
              >
                VIEW DETAILS 
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentJob;
