
import { useNavBar } from "@/context/navBarContext";
import FileItem from "./MenuItems/File.item";
import EditItem from "./MenuItems/Edit.item";
import SelectionItem from "./MenuItems/Selection.item";
import ViewItem from "./MenuItems/View.item";
import GoItem from "./MenuItems/Go.item";
import RunItem from "./MenuItems/Run.item";
import TerminalItem from "./MenuItems/Terminal.item";
import HelpItem from "./MenuItems/Help.item";
import Image from "next/image";
import Link from "next/link";

function MenuBar() {
  const { isMenuOpen, toggleMenu } = useNavBar();

  return (

    <div className="flex items-center text-[13px] relative">

      <Link href="/" className="cursor-pointer">
        <Image
          src="/nico-logo.svg"
          alt="Nico Logo"
          width={22}
          height={22}
          className="mx-[8px]"
        />
      </Link>
      <FileItem />
      <EditItem />
      <SelectionItem />
      <ViewItem />
      <GoItem />
      <RunItem />
      <TerminalItem />
      <HelpItem />
      {isMenuOpen && <div
        className="fixed inset-0 z-10"
        onClick={toggleMenu}
      />}
    </div>

  );
}

export default MenuBar;
