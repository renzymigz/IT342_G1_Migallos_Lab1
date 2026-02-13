import { Link } from "react-router-dom";
import Doodle1 from "../assets/doodle-1.jpg";
import Doodle2 from "../assets/doodle-2.jpg";
import Doodle3 from "../assets/doodle-3.png";
import Doodle4 from "../assets/doodle-4.png";
import Doodle5 from "../assets/doodle-5.png";

import ProfilePicture from "../assets/my-profile.png";

const Profile = () => {
  const userData = {
    userId: "1",
    username: "renzymigz",
    firstName: "Renzo",
    lastName: "Migallos",
    email: "renzo.migallos@example.com",
    phone: "+63 912 345 6789",
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      {/* --- DOODLE AREA START --- */}

      <img
        src={Doodle1}
        alt="Doodle"
        className="absolute top-20 left-10 h-24 rotate-[-12deg] pointer-events-none"
      />

      <img
        src={Doodle2}
        alt="Doodle"
        className="absolute bottom-12 right-12 h-32 rotate-[45deg] pointer-events-none"
      />

      <img
        src={Doodle3}
        alt="Doodle"
        className="absolute top-20 right-20 h-16  rotate-[15deg] pointer-events-none"
      />

      <img
        src={Doodle4}
        alt="Doodle"
        className="absolute bottom-24 left-16 h-28  rotate-[-6deg] pointer-events-none"
      />

      <img
        src={Doodle5}
        alt="Doodle"
        className="absolute top-1/2 left-32 h-20  -translate-y-1/2 hidden xl:block pointer-events-none"
      />
      <div className="w-full max-w-4xl">
        <div>
          <h1 className="text-4xl font-bold items-center mb-8  flex flex-col gap-2 ">
            Profile
          </h1>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-8 py-6">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-white text-black rounded-full flex items-center justify-center text-3xl font-bold border border-gray-100">
                <img
                  src={ProfilePicture}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h2 className="text-[32px] leading-tight font-bold text-[#37352F]">
                  {userData.firstName + " " + userData.lastName}
                </h2>
                <div className="flex flex-col">
                  <span className="text-[14px] text-gray-500">
                    @{userData.username}
                  </span>
                  {/* Styled User ID: Small, gray, and monospace for a "system" feel */}
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-tighter">
                    ID: {userData.userId}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-gray-200" />

          {/* Profile Information */}
          <div className="space-y-6 p-8">
            {/* Username */}
            <div>
              <label className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-1 ml-1">
                Username
              </label>
              <div className="relative flex items-center">
                <i className="fa-regular fa-at absolute left-3 text-gray-400 text-sm"></i>
                <input
                  readOnly
                  value={userData.username}
                  className="w-full pl-10 pr-3 py-2 bg-white border border-gray-200 rounded-md text-gray-900 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* First Name */}
              <div>
                <label className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-1 ml-1">
                  First Name
                </label>
                <div className="relative flex items-center">
                  <i className="fa-regular fa-user absolute left-3 text-gray-400 text-sm"></i>
                  <input
                    readOnly
                    value={userData.firstName}
                    className="w-full pl-10 pr-3 py-2 bg-white border border-gray-200 rounded-md text-gray-900 focus:outline-none"
                  />
                </div>
              </div>
              {/* Last Name */}
              <div>
                <label className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-1 ml-1">
                  Last Name
                </label>
                <div className="relative flex items-center">
                  <i className="fa-regular fa-signature absolute left-3 text-gray-400 text-sm"></i>
                  <input
                    readOnly
                    value={userData.lastName}
                    className="w-full pl-10 pr-3 py-2 bg-white border border-gray-200 rounded-md text-gray-900 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* Email */}
            <div>
              <label className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-1 ml-1">
                Email Address
              </label>
              <div className="relative flex items-center">
                <i className="fa-regular fa-envelope absolute left-3 text-gray-400 text-sm"></i>
                <input
                  readOnly
                  value={userData.email}
                  className="w-full pl-10 pr-3 py-2 bg-white border border-gray-200 rounded-md text-gray-900 focus:outline-none"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-1 ml-1">
                Phone Number
              </label>
              <div className="relative flex items-center">
                <i className="fa-regular fa-phone absolute left-3 text-gray-400 text-sm"></i>
                <input
                  readOnly
                  value={userData.phone}
                  className="w-full pl-10 pr-3 py-2 bg-white border border-gray-200 rounded-md text-gray-900 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
