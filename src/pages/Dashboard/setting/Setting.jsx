import React, { useState } from 'react';
import profile from "../../../assets/user.svg";
import { UserCheck } from 'lucide-react';
import { ShieldCheck } from 'lucide-react';

const Setting = () => {
  const [activeTab, setActiveTab] = useState('Account');

  const [formData, setFormData] = useState({
    firstName: 'Alison',
    lastName: 'Jordon',
    email: 'alisonjordon12@gmail.com',
    phone: '+92 3046764556',
    currentPassword: '',
    newPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    console.log('Saving changes...', formData);
  };

  const handleCancel = () => {
    console.log('Canceling changes...');
  };

  const handleUploadNew = () => {
    console.log('Uploading new picture...');
  };

  const handleDeletePicture = () => {
    console.log('Deleting profile picture...');
  };

  return (
    <div className="min-h-screen p-4">
      <div className="w-full">
        <h1 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-6">
          Settings
        </h1>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8 ">
          <div className="flex justify-center bg-[#F3F3FA] rounded-lg p-2 space-x-2 w-full">
            <button
              onClick={() => setActiveTab('Account')}
              className={`flex gap-2 px-6 py-2  transition-all duration-300 ${
                activeTab === 'Account'
                  ? ' border-purple-700 border-b-3 text-purple-700 '
                  : 'text-gray-600 hover:bg-gray-200'
              }`}
            >
               <UserCheck/> <p>Account</p>
            </button>
            <button
              onClick={() => setActiveTab('Security')}
              className={`flex gap-2 px-6 py-2  transition-all duration-300 ${
                activeTab === 'Security'
                  ? ' border-purple-700 border-b-3 text-purple-700 '
                  : 'text-gray-600 hover:bg-gray-200'
              }`}
            >
             <ShieldCheck/> Security
            </button>
          </div>
        </div>

        {/* Account Settings Content */}
        {activeTab === 'Account' && (
          <div className="bg-[#F3F3FA] p-6 sm:p-8 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Account Settings
            </h2>

            {/* Profile Picture Section */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-200 pb-6 mb-6">
              <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                <img
                  src={profile}
                  alt="Profile"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-gray-900">Profile Picture</p>
                  <p className="text-sm text-gray-500">
                    PNG, JPEG, Under 15 MB
                  </p>
                </div>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={handleUploadNew}
                  className="px-4 py-2 text-sm font-semibold text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  UPLOAD NEW
                </button>
                <button
                  onClick={handleDeletePicture}
                  className="px-4 py-2 text-sm font-semibold text-white bg-[#FF5959] rounded-lg hover:bg-red-600 transition-colors"
                >
                  DELETE
                </button>
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="flex flex-col">
                <label
                  htmlFor="firstName"
                  className="text-sm font-medium text-gray-700 mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium text-gray-700 mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-gray-700 mb-2"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4 mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={handleCancel}
                className="px-6 py-3 text-sm font-semibold text-white bg-[#7A8B94] rounded-lg hover:bg-gray-400 transition-colors"
              >
                CANCEL
              </button>
              <button
                onClick={handleSaveChanges}
                className="px-6 py-3 text-sm font-semibold text-white bg-[#704FE6] rounded-lg hover:bg-purple-800 transition-colors"
              >
                SAVE CHANGES
              </button>
            </div>
          </div>
        )}

        {/* Security Settings Content */}
        {activeTab === 'Security' && (
          <div className="bg-[#F3F3FA] p-6 sm:p-8 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Security Settings
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="flex flex-col">
                <label
                  htmlFor="currentPassword"
                  className="text-sm font-medium text-gray-700 mb-2"
                >
                  Current Password
                </label>
                <input
                  type="password"
                  id="currentPassword"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleInputChange}
                  className="p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="newPassword"
                  className="text-sm font-medium text-gray-700 mb-2"
                >
                  New Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleInputChange}
                  className="p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4 mt-8 pt-6 border-gray-200">
              <button
                onClick={handleCancel}
                className="px-6 py-3 text-sm font-semibold text-white bg-[#7A8B94] rounded-lg hover:bg-gray-400 transition-colors"
              >
                CANCEL
              </button>
              <button
                onClick={handleSaveChanges}
                className="px-6 py-3 text-sm font-semibold text-white bg-[#704FE6] rounded-lg hover:bg-purple-800 transition-colors"
              >
                SAVE CHANGES
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Setting;
