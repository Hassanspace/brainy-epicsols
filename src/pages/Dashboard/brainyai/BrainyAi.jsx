import React from 'react';
import { FaPaperPlane, FaImage, FaFileAlt, FaChartLine } from 'react-icons/fa';
import pin from "../../../assets/pin.svg"
import language from "../../../assets/language.svg"
import magic from "../../../assets/magic.svg"
import send from "../../../assets/send.svg"
import { WandSparkles } from 'lucide-react';
const BrainyAi = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <h1 className="text-3xl font-bold text-gray-700 mb-6">What Can I Help With?</h1>

      {/* Main input box */}
      <div className="w-full max-w-4xl flex flex-col bg-gradient-to-r from-pink-100 to-blue-100 rounded-lg p-4 shadow-md h-32" >
        {/* Textarea */}
      <textarea
  placeholder="Write Message here"
  className="w-full resize-none h-28 p-3 rounded-md border-0 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-transparent text-gray-700 placeholder-gray-600 overflow-hidden"
/>


        {/* Icons and Send button */}
        <div className="flex items-center justify-between mt-3">
          {/* Left icons */}
          <div className="flex space-x-4">
            <button className="text-gray-600 hover:text-purple-600 text-2xl ">
              <img className='' src={pin} alt="" />
            </button>
            <button className="text-gray-600 hover:text-purple-600 text-xl">
             <img src={language} alt="" />
            </button>
            <button className="text-gray-600 hover:text-purple-600 text-xl">
               <img src={magic} alt="" />
            </button>
          </div>

          {/* Send button */}
          <button className="bg-gradient-to-r from-purple-500 to-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center hover:shadow-lg transition">
            <img src={send} alt="" />
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-3 mt-4">
  <button className="bg-[#F3F3FA] text-gray-700 font-medium py-2 px-3 sm:px-4 rounded-full hover:bg-gray-100 focus:outline-none">
    Create Image
  </button>
  <button className="bg-[#F3F3FA] text-gray-700 font-medium py-2 px-3 sm:px-4 rounded-full hover:bg-gray-100 focus:outline-none">
    Summarize Text
  </button>
  <button className="bg-[#F3F3FA] text-gray-700 font-medium py-2 px-3 sm:px-4 rounded-full hover:bg-gray-100 focus:outline-none">
    Analyze Data
  </button>
  <button className="bg-[#F3F3FA] text-gray-700 font-medium py-2 px-3 sm:px-4 rounded-full hover:bg-gray-100 focus:outline-none">
    More
  </button>
</div>

    </div>
  );
};

export default BrainyAi;
