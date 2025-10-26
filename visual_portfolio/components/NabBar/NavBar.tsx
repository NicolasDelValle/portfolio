import React from "react";
import MenuBar from "./MenuBar";
import { NavBarProvider } from "@/context/navBarContext";
import GearIcon from "./MenuItems/Gear.Icon";
import UserIcon from "./MenuItems/User.icon";
import ChatIcon from "./MenuItems/Chat.Icon";


const NavBarComponent = () => {
  return (
    <div className="bg-background-secondary border-b-[1px] border-b-border w-full py-1 flex items-center gap-4  text-[14px] justify-between z-30">
      <MenuBar />
      <div>
        Hola este es el titulo
      </div>
      <div>
        <div className="flex flex-row mx-2">
          <ChatIcon />
          <UserIcon />
          <GearIcon />
        </div>
      </div>
    </div>
  );
}; function NavBar() {
  return (
    <NavBarProvider>
      <NavBarComponent />
    </NavBarProvider>
  );
}

export default NavBar;