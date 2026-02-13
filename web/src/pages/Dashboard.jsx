import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authAPI } from '../api/auth';
import DashboardImage from "../assets/dashboard-illustration.png";

const Dashboard = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const data = await authAPI.getDashboard();
        setUserData(data);
      } catch (err) {
        console.error('Error fetching dashboard:', err);
        if (err.response?.status === 401) {
          navigate('/login');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboard();
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <i className="fa-solid fa-spinner fa-spin text-4xl text-gray-400"></i>
      </div>
    );
  }

  return (
    <div className="flex h-screen justify-center items-center flex-col">
      
      <div className="flex items-center justify-center p-12">
        <img
          src={DashboardImage}
          alt="Dashboard Illustration"
          className="w-2xl h-auto object-contain"
        ></img>
      </div>
      <h1 className="text-6xl font-bold text-center">
        Welcome back, <span className="text-white bg-black px-4">{userData.firstName + " " + userData.lastName}</span>! <i className="fa-solid fa-hand-wave"></i>
      </h1>

      <div className="my-16 text-10 text-gray-600 italic">
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
