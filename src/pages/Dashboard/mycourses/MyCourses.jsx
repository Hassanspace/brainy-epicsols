import React from "react";
import course1 from "../../../assets/course1.svg";
import course2 from "../../../assets/course2.svg";

const MyCourses = () => {
  const courses = [
    { title: "Sub Inspector Preparation", progress: 75, subTitle: "Lesson 1 is Simply Dummy Text", imageUrl: course1 },
    { title: "CSS Screening Preparation", progress: 25, subTitle: "Lesson 1 is Simply Dummy Text", imageUrl: course2 },
    { title: "FMSG Preparation", progress: 50, subTitle: "Lesson 1 is Simply Dummy Text", imageUrl: course1 },
    { title: "PPSC Training Preparation", progress: 75, subTitle: "Lesson 1 is Simply Dummy Text", imageUrl: course2 },
    { title: "Sub Inspector Preparation", progress: 25, subTitle: "Lesson 1 is Simply Dummy Text", imageUrl: course1 },
    { title: "CSS Screening Preparation", progress: 20, subTitle: "Lesson 1 is Simply Dummy Text", imageUrl: course2 },
    { title: "Sub Inspector Preparation", progress: 75, subTitle: "Lesson 1 is Simply Dummy Text", imageUrl: course1 },
    { title: "Sub Inspector Preparation", progress: 75, subTitle: "Lesson 1 is Simply Dummy Text", imageUrl: course1 },
  ];

  const getProgressColor = (progress) => {
    if (progress < 50) return "bg-red-500";
    if (progress < 75) return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">My Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 flex flex-col items-center"
          >
            {/* Course Image */}
            <img
              src={course.imageUrl}
              alt={course.title}
              className="object-cover rounded-[16px] h-64 w-full"
            />

            {/* Course Content */}
            <div className="w-full mt-4 px-2">
              {/* Title */}
              <h3 className="text-lg font-bold text-gray-800">{course.title}</h3>

              {/* Subtitle */}
              <p className="text-sm text-gray-600 mt-1">{course.subTitle}</p>

              {/* Progress bar */}
              <div className="mt-2">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`${getProgressColor(course.progress)} h-2 rounded-full`}
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-end text-xs mt-1">
                  <span>{course.progress}%</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;
