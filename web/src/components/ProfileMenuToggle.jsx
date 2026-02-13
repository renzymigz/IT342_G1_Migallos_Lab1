import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authAPI } from "../api/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import Profile from "../assets/my-profile.png";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function ProfileMenuToggle() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await authAPI.getProfile();
        setUserData(data);
      } catch (err) {
        console.error('Error fetching user data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await authAPI.logout();
      navigate('/login');
    } catch (err) {
      console.error('Logout error:', err);
      // Even if API call fails, still redirect to login
      navigate('/login');
    }
  };

  const getInitials = () => {
    if (!userData) return 'U';
    return `${userData.firstName?.[0] || ''}${userData.lastName?.[0] || ''}`.toUpperCase();
  };

  const getFullName = () => {
    if (!userData) return 'Loading...';
    return `${userData.firstName || ''} ${userData.lastName || ''}`.trim();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="rounded-full p-1 hover:bg-gray-100 transition">
          <Avatar className="w-10 h-10">
            <AvatarImage src={Profile} alt="Profile" />
            <AvatarFallback>{getInitials()}</AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-64" align="end">
        <DropdownMenuGroup>
          <DropdownMenuLabel className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div>
                <div className="relative w-fit">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={Profile} alt="Profile" />
                    <AvatarFallback>{getInitials()}</AvatarFallback>
                  </Avatar>
                  <span className="border-background bg-green-600 absolute -right-0.5 -bottom-0.5 size-3 rounded-full border-2">
                    <span className="sr-only">Online</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium">
                  {getFullName()}
                </span>
                <span className="text-xs text-muted-foreground">
                  @{userData?.username || 'username'}
                </span>
              </div>
            </div>
          </DropdownMenuLabel>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link to="/profile" className="flex items-center gap-2">
              <i className="fa-regular fa-user"></i>
              Profile
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem disabled className="flex items-center gap-2">
            <i className="fa-regular fa-credit-card"></i>
            Billing
          </DropdownMenuItem>

          <DropdownMenuItem disabled className="flex items-center gap-2">
            <i className="fa-regular fa-gear"></i>
            Settings
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <button className="flex items-center gap-2 w-full px-2 py-1 text-[14px] text-red-600 hover:bg-red-50">
                  <i className="fa-solid fa-arrow-left-from-bracket"></i>
                  Log out
                </button>
              </AlertDialogTrigger>
              <AlertDialogContent className="sm:max-w-md">
                <AlertDialogHeader>
                    
                  <AlertDialogTitle>
                    Are you sure you want to log out?
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    You will no longer be logged in on this device.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel variant="outline">
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction variant="destructive" onClick={handleLogout}>
                    Log Out
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
