import { MenuItem, MenuItems } from '@headlessui/react';
import { LogIn, LogOut, UserPlus } from 'lucide-react';
import Login from "../auth/Login";
import Register from "../auth/Register";

interface OptionDropdownProps {
  loggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
}

export default function OptionDropdown({ loggedIn, setLoggedIn }: OptionDropdownProps) {
  
  const logOut = () => setLoggedIn(false);

  return (
    <div className="fixed top-24 w-40 text-right">
      <MenuItems
        transition
        anchor="bottom end"
        className="w-52 origin-top-right rounded-xl border border-white/5 bg-black/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 bg-slate-600"
      >
        {!loggedIn ? 
          <>
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                <LogIn className="size-4 fill-white/30" />
                Login
              </button>
            </MenuItem>
            <div className="my-1 h-px bg-white/5" />
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                <UserPlus className="size-4 fill-white/30" />
                Register
              </button>
            </MenuItem>
          </>
          :
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10" onClick={logOut}
            >
              <LogOut className="size-4 fill-white/30" />
              Logout
            </button>
          </MenuItem>
        }
      </MenuItems>
      <Login />
      <Register />
    </div>
  )
}
