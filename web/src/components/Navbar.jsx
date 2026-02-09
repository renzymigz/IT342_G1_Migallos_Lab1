import { Link, useLocation } from 'react-router-dom';
import ProfileMenuToggle from './ProfileMenuToggle';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  // Logic: Show buttons ONLY if we are currently on /login or /register
  const showAuthButtons = location.pathname === '/login' || location.pathname === '/register';

  return (
    <nav className="bg-white fixed top-0 left-0 right-0 z-50 border-b border-gray-300">
      <div className="max-w-375 mx-auto px-4 sm:px-10">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/login" className="text-2xl font-bold flex items-center">
              {/* Note: changed 'class' to 'className' for React */}
              <i className="fa-solid fa-command pr-3"></i>
              <span className="hidden sm:inline">mini-app</span>
            </Link>
          </div>
          
          {/* Auth Buttons - Only render if on Auth pages */}
          {showAuthButtons && (
            <div className="flex space-x-4">
              <Link
                to="/register"
                className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors border border-gray-200 ${
                  isActive('/register')
                    ? 'bg-black text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className="hidden sm:inline">
                  <i className="fa-solid fa-user pr-2"></i>
                </div>
                Register
              </Link>

              <Link
                to="/login"
                className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors border border-gray-200 ${
                  isActive('/login')
                    ? 'bg-black text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className="hidden sm:inline">
                  <i className="fa-solid fa-arrow-left-to-bracket pr-2"></i>
                </div>
                Login
              </Link>
            </div>
          )}

          { !showAuthButtons && (
            <div>
              <ProfileMenuToggle />
            </div>
          )}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;