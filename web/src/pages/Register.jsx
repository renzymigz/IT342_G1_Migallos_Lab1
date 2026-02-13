import { useState } from "react";
import { Link } from "react-router-dom";
import RegisterImage from "../assets/register-illustration.png";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  // --- NEW: Validation State ---
  const [phoneError, setPhoneError] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear error when user starts typing again
    if (e.target.name === "phone") {
      setPhoneError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    // Checks for a standard PH format or international (10-13 digits)
    const phoneRegex = /^(09|\+639)\d{9}$/; 
    if (!phoneRegex.test(formData.phone)) {
      setPhoneError("Please enter a valid PH phone number (e.g., 09123456789)");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Register data:", formData);
    // TODO: Add API call here
  };

  return (
    <div className="min-h-screen flex pt-16">
      {/* Right Side - Image/Illustration */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <img
            src={RegisterImage}
            alt="Register Illustration"
            className="w-2xl h-auto object-contain"
          />
        </div>
      </div>

      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white overflow-y-auto">
        <div className="w-full max-w-md py-8">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Your Account</h1>
            <p className="text-gray-600">Fill in the details to get started</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* ... Username, First/Last Name, Email fields (Same as your code) ... */}
            
            {/* Username */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition"
                placeholder="Choose a username"
                required
              />
            </div>

            {/* Names Row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none" placeholder="First name" required />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none" placeholder="Last name" required />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none" placeholder="your.email@example.com" required />
            </div>

            {/* --- Phone Number with Validation UI --- */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black outline-none transition ${
                  phoneError ? "border-red-500 bg-red-50" : "border-gray-300"
                }`}
                placeholder="09123456789"
                required
              />
              {phoneError && (
                <p className="text-red-500 text-xs mt-1 font-medium">{phoneError}</p>
              )}
            </div>

            {/* ... Passwords and Button (Same as your code) ... */}
            <div>
              <label htmlFor="password" size className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none" required />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"><i className={`fa-solid cursor-pointer ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i></button>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" size className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
              <div className="relative">
                <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none" required />
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"><i className={`fa-solid cursor-pointer ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i></button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg font-semibold cursor-pointer hover:bg-[#2e2e2e] transition duration-200 shadow-lg"
            >
              Register
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-black font-semibold">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;