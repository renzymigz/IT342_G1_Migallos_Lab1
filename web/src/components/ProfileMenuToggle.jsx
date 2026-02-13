import { Link, useLocation } from "react-router-dom";
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
import { Trash2Icon } from "lucide-react"

export default function ProfileMenuToggle() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="rounded-full p-1 hover:bg-gray-100 transition">
          <Avatar className="w-10 h-10">
            <AvatarImage src={Profile} alt="shadcn" />
            <AvatarFallback>PFP</AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-64" align="end">
        <DropdownMenuGroup>
          <DropdownMenuLabel className="flex items-center gap-2">
            <div class="flex items-center gap-2">
              <div>
                <div className="relative w-fit">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={Profile} alt="shadcn" />
                    <AvatarFallback>PFP</AvatarFallback>
                  </Avatar>
                  <span className="border-background bg-green-600 absolute -right-0.5 -bottom-0.5 size-3 rounded-full border-2">
                    <span className="sr-only">Busy</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium">
                  Florence Azriel R. Migallos
                </span>
                <span className="text-xs text-muted-foreground">
                  florenceazriel.migallos@cit.edu
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
                   you will no longer be logged in on the selected device
                    this chat.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel variant="outline">
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction variant="destructive">
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
