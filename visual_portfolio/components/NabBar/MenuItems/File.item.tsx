import { useNavBar } from "@/context/navBarContext";
import Divider from "@mui/material/Divider";
import Dropdown from "../../ui/Dropdown";

function FileItem() {

  const file = {
    name: "File",
    items: [
      "New File",
      "Open File...",
      "Open Folder...",
      "Open Recent",
      "---",
      "Save",
      "Save As...",
      "Save All",
      "---",
      "Close",
      "Exit"
    ]
  }

  const { isMenuOpen, activeItem, setActiveItem, toggleMenu } = useNavBar();

  const isHovered = activeItem === file.name && isMenuOpen;

  return (

    <Dropdown
      isOpen={isHovered}
      name={file.name}
      onClick={toggleMenu}
      onClose={toggleMenu}
      onMouseEnter={() => setActiveItem(file.name)}
      items={[
        "New File",
        "Open File...",
        "Open Folder...",
        <Divider className="bg-border" key={Math.random()} />,
        "Save",
        "Save As...",
        "Save All",
        <Divider className="bg-border" key={Math.random()} />,
        "Close",
        "Exit"
      ]}
    />

  );
}

export default FileItem;
