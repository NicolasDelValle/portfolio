import React from "react";
import IconButton from '@mui/material/IconButton';
import { CircleUserRound, MessageSquare, Settings } from 'lucide-react';
import MenuBar from "./MenuBar";
import { NavBarProvider } from "@/context/navBarContext";


const NavBarComponent = () => {
  return (
    <div className="bg-background-secondary border-b-[1px] border-b-border w-full py-1 flex items-center gap-4  text-[14px] justify-between z-30">
      <MenuBar />
      <div>
        Hola este es el titulo
      </div>
      <div>

        <IconButton aria-label="delete" size="small" >
          <MessageSquare size={16} className="text-foreground hover:opacity-80 transition-all" />
        </IconButton>
        <IconButton aria-label="delete" size="small" >
          <CircleUserRound size={16} className="text-foreground hover:opacity-80 transition-all" />
        </IconButton>
        <IconButton aria-label="delete" size="small" >
          <Settings size={16} className="text-foreground hover:opacity-80 transition-all" />
        </IconButton>
      </div>
    </div>
  );
};

function NavBar() {
  return (
    <NavBarProvider>
      <NavBarComponent />
    </NavBarProvider>
  );
}

export default NavBar;
