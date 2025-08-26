import React, { useState } from "react";
import course1 from "../../../assets/course1.svg";
import course2 from "../../../assets/course2.svg";
import { FaStar } from "react-icons/fa";
import { BriefcaseBusiness , BookMarked } from 'lucide-react';

const AvailableCourses = () => {
  const [activeTab, setActiveTab] = useState("Job Courses");

  const tabs = [
  { name: "Job Courses", icon: BriefcaseBusiness },
  { name: "Subject Courses", icon: BookMarked },
];

  // Sample courses data
  const coursesData = {
    "Job Courses": [
      { title: "Sub Inspector Preparation", subTitle: "Law & Policing", imageUrl: course1, rating: 5 },
      { title: "CSS Screening Preparation", subTitle: "CSS Academy", imageUrl: course2, rating: 4 },
      { title: "FMSG Preparation", subTitle: "Medical Courses", imageUrl: course1, rating: 3 },
      { title: "PPSC Training", subTitle: "Public Service", imageUrl: course2, rating: 4 },
      { title: "Sub Inspector Preparation", subTitle: "Law & Policing", imageUrl: course1, rating: 5 },
      { title: "CSS Screening Preparation", subTitle: "CSS Academy", imageUrl: course2, rating: 4 },
      { title: "FMSG Preparation", subTitle: "Medical Courses", imageUrl: course1, rating: 3 },
      { title: "PPSC Training", subTitle: "Public Service", imageUrl: course2, rating: 4 },
         { title: "Sub Inspector Preparation", subTitle: "Law & Policing", imageUrl: course1, rating: 5 },
      { title: "CSS Screening Preparation", subTitle: "CSS Academy", imageUrl: course2, rating: 4 },
      { title: "FMSG Preparation", subTitle: "Medical Courses", imageUrl: course1, rating: 3 },
      { title: "PPSC Training", subTitle: "Public Service", imageUrl: course2, rating: 4 },
      { title: "Sub Inspector Preparation", subTitle: "Law & Policing", imageUrl: course1, rating: 5 },
      { title: "CSS Screening Preparation", subTitle: "CSS Academy", imageUrl: course2, rating: 4 },
      { title: "FMSG Preparation", subTitle: "Medical Courses", imageUrl: course1, rating: 3 },
      { title: "PPSC Training", subTitle: "Public Service", imageUrl: course2, rating: 4 },
    ],
    "Subject Courses": [
      { title: "Mathematics Basics", subTitle: "Algebra & Calculus", imageUrl: course1, rating: 5 },
      { title: "English Literature", subTitle: "Poems & Stories", imageUrl: course2, rating: 4 },
      { title: "Physics Concepts", subTitle: "Mechanics & Optics", imageUrl: course1, rating: 5 },
      { title: "History Overview", subTitle: "World & Pakistan", imageUrl: course2, rating: 3 },
      { title: "Mathematics Basics", subTitle: "Algebra & Calculus", imageUrl: course1, rating: 5 },
      { title: "English Literature", subTitle: "Poems & Stories", imageUrl: course2, rating: 4 },
      { title: "Physics Concepts", subTitle: "Mechanics & Optics", imageUrl: course1, rating: 5 },
      { title: "History Overview", subTitle: "World & Pakistan", imageUrl: course2, rating: 3 },
    ],
  };

  return (
    <div className="container mx-auto p-4 bg-white">
      <h2 className="text-2xl font-bold mb-4">Available Courses</h2>

      {/* Tabs */}
      <div className="flex gap-6 mb-6 bg-[#F3F3FA] p-2 rounded-md">
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
        <Icon className={isActive ? "text-[#704FE6]" : "text-gray-400 hover:text-[#704FE6]"} />
        <span>{tab.name}</span>
      </button>
    );
  })}
</div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {coursesData[activeTab].map((course, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 flex flex-col items-center"
          >
            {/* Image */}
            <img
              src={course.imageUrl}
              alt={course.title}
              className="object-cover rounded-[16px] h-64 w-full"
            />

            {/* Content */}
            <div className="w-full mt-4 px-2 text-start">
              <h3 className="text-lg font-bold text-gray-800">{course.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{course.subTitle}</p>

              {/* Rating Stars */}
              <div className="flex justify-start mt-2 gap-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar
                    key={i}
                    className={`h-4 w-4 ${
                      i < course.rating ? "text-[#FF902D]" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableCourses;
