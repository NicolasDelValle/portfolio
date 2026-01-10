import React from "react";
import MenuBar from "./MenuBar";
import { NavBarProvider } from "@/context/navBarContext";
import { useTabContext } from "@/context/tabContext";
import GearIcon from "./MenuItems/Gear.Icon";
import UserIcon from "./MenuItems/User.icon";
import ChatIcon from "./MenuItems/Chat.Icon";


const NavBarComponent = () => {
  const { tabs, activeTabId } = useTabContext();
  const activeTab = tabs.find(tab => tab.id === activeTabId);

  const title = activeTab
    ? `${activeTab.name} - visual-portfolio - Nicolas Del Valle`
    : 'visual-portfolio - Nicolas Del Valle';

  return (
    <div className="bg-background-secondary border-b-[1px] border-b-border w-full py-1 flex items-center gap-4  text-[14px] justify-between z-30">
      <MenuBar />
      <div className="flex-1 text-center truncate px-4">
        {title}
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