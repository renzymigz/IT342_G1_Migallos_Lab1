import { Link } from 'react-router-dom';

const Profile = () => {
  // Dummy user data
  const userData = {
    username: "renzymigz",
    firstName: "Renzo",
    lastName: "Migallos",
    email: "renzo.migallos@example.com",
    phone: "+63 912 345 6789",
    memberSince: "January 15, 2025"
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8 ">
      <div className="w-full max-w-3xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            My Profile <i className="fa-solid fa-user"></i>
          </h1>
          <p className="text-gray-600">View and manage your account information</p>
        </div>


        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">

          <div className="bg-black text-white px-8 py-6">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-white text-black rounded-full flex items-center justify-center text-3xl font-bold">
                {userData.firstName[0]}{userData.lastName[0]}
              </div>
              <div>
                <h2 className="text-2xl font-bold">{userData.username}</h2>
                <p className="text-gray-300">Member since {userData.memberSince}</p>
              </div>
            </div>
          </div>

          {/* Profile Information */}
          <div className="p-8 space-y-6">
            {/* Username */}
            <div className="border-b border-gray-200 pb-4">
              <label className="block text-sm font-medium text-gray-500 mb-2">
                <i className="fa-solid fa-user mr-2"></i>Username
              </label>
              <p className="text-lg text-gray-900 font-medium">{userData.username}</p>
            </div>

            {/* Full Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-b border-gray-200 pb-4">
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-2">
                  <i className="fa-solid fa-id-card mr-2"></i>First Name
                </label>
                <p className="text-lg text-gray-900 font-medium">{userData.firstName}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-2">
                  <i className="fa-solid fa-id-card mr-2"></i>Last Name
                </label>
                <p className="text-lg text-gray-900 font-medium">{userData.lastName}</p>
              </div>
            </div>

            {/* Email */}
            <div className="border-b border-gray-200 pb-4">
              <label className="block text-sm font-medium text-gray-500 mb-2">
                <i className="fa-solid fa-envelope mr-2"></i>Email Address
              </label>
              <p className="text-lg text-gray-900 font-medium">{userData.email}</p>
            </div>

            {/* Phone */}
            <div className="border-b border-gray-200 pb-4">
              <label className="block text-sm font-medium text-gray-500 mb-2">
                <i className="fa-solid fa-phone mr-2"></i>Phone Number
              </label>
              <p className="text-lg text-gray-900 font-medium">{userData.phone}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="flex-1 px-6 py-3 bg-black text-white rounded-lg hover:bg-[#2e2e2e] transition font-medium">
                <i className="fa-solid fa-edit mr-2"></i>Edit Profile
              </button>
              <button className="flex-1 px-6 py-3 bg-white text-black border border-gray-300 rounded-lg hover:bg-gray-50 transition font-medium">
                <i className="fa-solid fa-key mr-2"></i>Change Password
              </button>
            </div>

            {/* Back to Dashboard */}
            <div className="pt-4 text-center">
              <Link 
                to="/dashboard" 
                className="inline-flex items-center text-gray-600 hover:text-black transition"
              >
                <i className="fa-solid fa-arrow-left mr-2"></i>
                Back to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;