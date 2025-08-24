import React, { useState } from "react";
import tick from "../../assets/tick.svg";
import logo from "../../assets/BRAINY.svg";
import { Link } from "react-router-dom";

const Signup = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      {/* Navbar */}
      <nav className="w-full py-4 shadow-md flex justify-center bg-white">
        <img src={logo} alt="Logo" className="h-10" />
      </nav>

      <div className="flex justify-center items-center mt-10 text-3xl font-semibold">
        <h1>Create Your Account</h1>
      </div>

      {/* Stepper */}
      <div className="px-6 py-10">
        <ul className="steps w-full mb-10 relative">
          {[1, 2, 3].map((s) => (
            <li
              key={s}
              className={`step ${step >= s ? "step-primary" : ""} relative`}
              data-content=" "
            >
              <img
                src={tick}
                alt=""
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[23px] w-6 h-6 z-10"
              />
              <span className="mt-2 text-sm">
                {s === 1 ? "Personal Information" : s === 2 ? "Education Information" : "Job Information "}
              </span>
            </li>
          ))}
        </ul>

        {/* Forms */}
        <div className="max-w-6xl mx-auto w-full  p-3.5">
          {/* Step 1: Personal Information */}
          {step === 1 && (
            <div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="firstName" className="block mb-1 font-medium">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    className="input input-bordered w-full"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-1 font-medium">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                    className="input input-bordered w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1 font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="input input-bordered w-full"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-1 font-medium">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="text"
                    placeholder="Phone"
                    className="input input-bordered w-full"
                  />
                </div>
                <div>
                  <label htmlFor="cnic" className="block mb-1 font-medium">
                    CNIC
                  </label>
                  <input
                    id="cnic"
                    type="text"
                    placeholder="CNIC"
                    className="input input-bordered w-full"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block mb-1 font-medium">
                    Address
                  </label>
                  <input
                    id="address"
                    type="text"
                    placeholder="Address"
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Education Information */}
          {step === 2 && (
            <div>
            
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label
                    htmlFor="qualification"
                    className="block mb-1 font-medium"
                  >
                    Qualification
                  </label>
                  <input
                    id="qualification"
                    type="text"
                    placeholder="Qualification"
                    className="input input-bordered w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="institution"
                    className="block mb-1 font-medium"
                  >
                    Institution Name
                  </label>
                  <input
                    id="institution"
                    type="text"
                    placeholder="Institution Name"
                    className="input input-bordered w-full"
                  />
                </div>
                <div>
                  <label htmlFor="field" className="block mb-1 font-medium">
                    Field of Study
                  </label>
                  <input
                    id="field"
                    type="text"
                    placeholder="Field of Study"
                    className="input input-bordered w-full"
                  />
                </div>
                <div>
                  <label htmlFor="startYear" className="block mb-1 font-medium">
                    Start Year
                  </label>
                  <input
                    id="startYear"
                    type="number"
                    placeholder="Start Year"
                    className="input input-bordered w-full"
                  />
                </div>
                <div>
                  <label htmlFor="endYear" className="block mb-1 font-medium">
                    End Year
                  </label>
                  <input
                    id="endYear"
                    type="number"
                    placeholder="End Year"
                    className="input input-bordered w-full"
                  />
                </div>
                <div>
                  <label htmlFor="cgpa" className="block mb-1 font-medium">
                    CGPA
                  </label>
                  <input
                    id="cgpa"
                    type="text"
                    placeholder="CGPA"
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="md:col-span-3">
                  <label
                    htmlFor="certifications"
                    className="block mb-1 font-medium"
                  >
                    Certifications
                  </label>
                  <input
                    id="certifications"
                    type="text"
                    placeholder="Certifications"
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Job Information */}
          {step === 3 && (
            <div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="jobTitle" className="block mb-1 font-medium">
                    Job Title
                  </label>
                  <input
                    id="jobTitle"
                    type="text"
                    placeholder="Job Title"
                    className="input input-bordered w-full"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block mb-1 font-medium">
                    Company Name
                  </label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Company Name"
                    className="input input-bordered w-full"
                  />
                </div>
                <div>
                  <label htmlFor="location" className="block mb-1 font-medium">
                    Location
                  </label>
                  <input
                    id="location"
                    type="text"
                    placeholder="Location"
                    className="input input-bordered w-full"
                  />
                </div>
                <div>
                  <label htmlFor="startDate" className="block mb-1 font-medium">
                    Start Date
                  </label>
                  <input
                    id="startDate"
                    type="date"
                    className="input input-bordered w-full"
                  />
                </div>
                <div>
                  <label htmlFor="endDate" className="block mb-1 font-medium">
                    End Date
                  </label>
                  <input
                    id="endDate"
                    type="date"
                    className="input input-bordered w-full"
                  />
                </div>
                <div>
                  <label htmlFor="skills" className="block mb-1 font-medium">
                    Skills
                  </label>
                  <input
                    id="skills"
                    type="text"
                    placeholder="Skills"
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            {step > 1 && (
              <button onClick={prevStep} className="bg-[#A2A1A1] cursor-pointer text-white h-14 w-44 rounded-[12px]">
                Previous
              </button>
            )}
            {step < 3 ? (
              <button onClick={nextStep} className=" text-white cursor-pointer bg-[#075E54] h-14 w-44 rounded-[12px]">
                Next Step
              </button>
            ) : (
              <button className=" text-white cursor-pointer bg-[#075E54] h-14 w-44 rounded-[12px]">Submit</button>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center font-bold ">ALL READY HAVE AN ACCOUNT? <Link to = "/Login"><span className="text-green-400">LOG IN</span></Link> </div>
    </div>
  );
};

export default Signup;
