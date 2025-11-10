import { useNavBar } from "@/context/navBarContext";
import { useI18n } from "@/hooks/useI18n";
import Divider from "@mui/material/Divider";
import Dropdown from "../../ui/Dropdown";

function FileItem() {
  const { t } = useI18n();

  const file = {
    name: t("fileMenu.file"),
    items: [
      t("fileMenu.newFile"),
      t("fileMenu.openFile"),
      t("fileMenu.openFolder"),
      <Divider className="bg-border" key={Math.random()} />,
      t("fileMenu.save"),
      t("fileMenu.saveAs"),
      t("fileMenu.saveAll"),
      <Divider className="bg-border" key={Math.random()} />,
      t("fileMenu.close"),
      t("fileMenu.exit")
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
      items={file.items}
    />

  );
}

export default FileItem;
