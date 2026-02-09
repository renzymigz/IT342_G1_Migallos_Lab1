import DashboardImage from "../assets/dashboard-illustration.png";
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div class="flex h-screen justify-center items-center flex-col">
      
      <div className="flex items-center justify-center p-12">
        <img
          src={DashboardImage}
          alt="Login Illustration"
          className="w-2xl h-auto object-contain"
        ></img>
      </div>
      <h1 className="text-6xl font-bold text-center">
        Welcome back, <span className="text-white bg-black px-4">renzymigz</span>! <i class="fa-solid fa-hand-wave"></i>
      </h1>

      <div class = "my-16 text-10 text-gray-600 italic">
        "erm what the dashboard"
      </div>

      {/* <div className="w-full max-w-4xl flex justify-end">
        <Link to="/profile" className="px-6 py-2 bg-black text-white rounded-sm hover:bg-[#2e2e2e] transition font-medium">
                Go to Profile <i class="fa-solid fa-right"></i>
        </Link>
        </div> */}
    </div>
  );
};
export default Dashboard;
