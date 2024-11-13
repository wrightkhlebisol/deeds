import { useState } from 'react';
import { MenuItem, MenuItems } from '@headlessui/react';
import { LogIn, LogOut, UserPlus } from 'lucide-react';
import Login from "../auth/Login";
import Register from "../auth/Register";
import { useAuth } from '../../contexts/AuthContext';
import { User } from 'firebase/auth';

interface OptionDropdownProps {
  currentUser: User | null;
}

export default function OptionDropdown({ currentUser }: OptionDropdownProps) {
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  const {logOutUser} = useAuth();
  const logOut = async () => await logOutUser();

  return (
    <div className="fixed top-24 w-40 text-right">
      <MenuItems
        transition
        anchor="bottom end"
        className="w-52 origin-top-right rounded-xl border border-white/5 bg-black/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 bg-slate-600"
      >
        {!currentUser ? 
          <>
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10" onClick={() => setLoginOpen(!loginOpen)}>
                <LogIn className="size-4 fill-white/30" />
                Login
              </button>
            </MenuItem>
            <div className="my-1 h-px bg-white/5" />
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10" onClick={() => setRegisterOpen(!registerOpen)}>
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
      <Login open={loginOpen} setOpen={setLoginOpen} openRegister={setRegisterOpen} />
      <Register open={registerOpen} setOpen={setRegisterOpen} openLogin={setLoginOpen} />
    </div>
  )
}
