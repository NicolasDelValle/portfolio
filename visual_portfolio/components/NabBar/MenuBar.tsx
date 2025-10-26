
import { useNavBar } from "@/context/navBarContext";
import FileItem from "./MenuItems/File.item";
import EditItem from "./MenuItems/Edit.item";
import Image from "next/image";

function MenuBar() {
  const { isMenuOpen, toggleMenu } = useNavBar();

  return (

    <div className="flex items-center text-[13px] relative">

      <Image
        src="/nico-logo.svg"
        alt="Nico Logo"
        width={22}
        height={22}
        className="mx-[8px] "
      />
      <FileItem />
      <EditItem />
      {isMenuOpen && <div
        className="fixed inset-0 z-10"
        onClick={toggleMenu}
      />}
    </div>

  );
}

export default MenuBar;
