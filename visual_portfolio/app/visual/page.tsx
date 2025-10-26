'use client';

import NavBar from "@/components/NabBar/NavBar";
import SideBar from "@/components/SideBar/SideBar";

export default function VisualPage() {
  return (
    <div className="h-full overflow-hidden">
      <NavBar />
      <div className="h-full">
        <SideBar />
      </div>
    </div>
  );
}
