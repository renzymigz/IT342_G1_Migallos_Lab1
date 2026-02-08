import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50 border-b border-gray-300">
      <div className="max-w-375 mx-auto px-4 sm:px-10">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/login" className="text-2xl font-bold ">
              <i class="fa-solid fa-command pr-3"></i>Mini App
            </Link>
          </div>
          
          <div className="flex space-x-4">
            <Link
              to="/login"
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors border border-gray-300 ${
                isActive('/login')
                  ? 'bg-black text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Login
            </Link>
            <Link
              to="/register"
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors border border-gray-300 ${
                isActive('/register')
                  ? 'bg-black text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
