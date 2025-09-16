// src/pages/dashboard/jobs/JobDetail.jsx
import React from "react";
import { Bookmark } from "lucide-react";
import bgimg from "../../../assets/course1.svg";

const JobDetail = ({ job }) => {
  if (!job) return <p className="text-center">Job not found</p>;

  return (
    <div className="max-w-5xl mx-auto  overflow-hidden">
      {/* Top Banner */}
      <div
  className="relative h-40 md:h-56  rounded-[16px] bg-cover bg-center"
  style={{ backgroundImage: `url(${bgimg})` }}
>
  {/* Company Logo */}
  <div className="absolute -bottom-12 left-6 w-20 h-20 rounded-full bg-white border-4 border-white shadow-lg flex justify-center items-center ">
    <img src={job.logo} alt={job.title} className="object-cover" />
  </div>
</div>


      {/* Main Content */}
      <div className="p-6 mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="md:col-span-2">
          {/* Job Info */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold">{job.title}</h2>
            <p className="text-gray-600 uppercase tracking-wide text-sm">
              {job.company}
            </p>
            <p className="text-sm text-gray-500">
              {job.location} • {job.posted}
            </p>
          </div>

          {/* About Job */}
          <div className="bg-[#F9F9FF] p-4 rounded-lg mb-6">
            <h3 className="text-lg font-semibold mb-2">About The Job</h3>
            <p className="text-gray-700 leading-relaxed">{job.description}</p>
          </div>

          {/* Responsibilities */}
          {job.responsibilities && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Responsibilities</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {job.responsibilities.map((res, idx) => (
                  <li key={idx}>{res}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100 transition">
             
              Save
            </button>
            <button className="flex-1 px-4 py-2 rounded-lg bg-green-500 text-white font-medium hover:bg-green-600 transition">
              Apply Now
            </button>
          </div>

          {/* Combined Salary + Skills Card */}
          <div className="bg-[#F9F9FF] p-4 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">
              PKR {job.salary}
            </h4>
            <p className="text-xs uppercase text-gray-500 mb-4">Avg. Salary</p>

            <h4 className="font-semibold text-gray-800 mb-2">Skills</h4>
            <div className="flex flex-wrap gap-2">
              {(job.skills ?? []).map((skill, idx) => {
                const colors = [
                  "bg-purple-100 text-purple-700",
                  "bg-pink-100 text-pink-700",
                  "bg-blue-100 text-blue-700",
                  "bg-green-100 text-green-700",
                  "bg-yellow-100 text-yellow-700",
                  "bg-red-100 text-red-700",
                ];
                const colorClass = colors[idx % colors.length];
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

          {/* CTA */}
          <div className="p-4 rounded-lg  text-center text-white bg-[linear-gradient(180deg,#FF8F8F_0%,#704FE6_100%)]">
            <p className="font-semibold mb-3">
              Do You Want To Preparation For This Job
            </p>
            <button className="px-6 py-2 bg-transparent border-[1px] border-white text-white rounded-lg font-medium shadow  transition">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
