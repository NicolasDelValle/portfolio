
import { useNavBar } from "@/context/navBarContext";
import FileItem from "./MenuItems/File.item";
import EditItem from "./MenuItems/Edit.item";




function MenuBar() {
  const { isMenuOpen, toggleMenu } = useNavBar();

  return (

    <div className="flex items-center text-[13px] relative">

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
