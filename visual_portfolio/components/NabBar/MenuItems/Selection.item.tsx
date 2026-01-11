import { useNavBar } from "@/context/navBarContext";
import { useI18n } from "@/hooks/useI18n";
import Divider from "@mui/material/Divider";

function SelectionItem() {
  const { t } = useI18n();

  const selection = {
    name: t("menuBar.selection.title"),
    items: [
      t("menuBar.selection.selectAll"),
      t("menuBar.selection.expandSelection"),
      t("menuBar.selection.shrinkSelection"),
      "---",
      t("menuBar.selection.copyLineUp"),
      t("menuBar.selection.copyLineDown"),
      t("menuBar.selection.moveLinesUp"),
      t("menuBar.selection.moveLinesDown"),
      "---",
      t("menuBar.selection.addCursorAbove"),
      t("menuBar.selection.addCursorBelow"),
    ]
  }

  const { isMenuOpen, activeItem, setActiveItem, toggleMenu } = useNavBar();

  const isHovered = activeItem === selection.name && isMenuOpen;

  return (
    <div className="flex items-center text-[13px] relative z-20">

      <div className="relative">
        <button
          className={`px-2 py-0 hover:bg-hover transition-colors rounded-md z-50 ${isHovered ? 'bg-hover' : ''
            }`}
          onClick={toggleMenu}
          onMouseEnter={() => setActiveItem(selection.name)}
        >
          {selection.name}
        </button>

        {isHovered && (
          <div className="absolute top-full px-1 left-0 z-20 bg-background border border-border shadow-lg min-w-[200px] w-fit rounded-md">
            {selection.items.map((item, index) => (
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

export default SelectionItem;
