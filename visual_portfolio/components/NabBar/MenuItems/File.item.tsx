

import { useNavBar } from "@/context/navBarContext";
import Divider from "@mui/material/Divider";

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
    <div className="flex items-center text-[13px] relative z-20">

      <div key='file-tab' className="relative">
        <button
          className={`px-2 py-0 hover:bg-hover transition-colors rounded-md z-50 ${isHovered ? 'bg-hover' : ''
            }`}
          onClick={toggleMenu}
          onMouseEnter={() => setActiveItem(file.name)}
        >
          {file.name}
        </button>

        {isHovered && (
          <div className="absolute top-full px-1 left-0 z-20 bg-background border border-border shadow-lg min-w-[200px] w-fit rounded-md">
            {file.items.map((item, index) => (
              item === "---" ? (
                <Divider className="bg-border" key={index} />
              ) : (
                <button
                  key={index}
                  className="w-full text-left px-4 my-1 hover:bg-primary text-foreground hover:text-foreground transition-colors text-[13px] rounded-md"
                  onClick={toggleMenu}
                >
                  {item}
                </button>
              )
            ))}
          </div>
        )}
      </div>

    </div>
  );
}

export default FileItem;
