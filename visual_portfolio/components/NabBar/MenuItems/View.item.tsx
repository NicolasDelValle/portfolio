import { useNavBar } from "@/context/navBarContext";
import { useI18n } from "@/hooks/useI18n";
import Divider from "@mui/material/Divider";

function ViewItem() {
  const { t } = useI18n();

  const view = {
    name: t("menuBar.view.title"),
    items: [
      t("menuBar.view.commandPalette"),
      t("menuBar.view.openView"),
      "---",
      t("menuBar.view.appearance"),
      t("menuBar.view.editorLayout"),
      "---",
      t("menuBar.view.explorer"),
      t("menuBar.view.search"),
      t("menuBar.view.sourceControl"),
      t("menuBar.view.run"),
      t("menuBar.view.extensions"),
      "---",
      t("menuBar.view.problems"),
      t("menuBar.view.output"),
      t("menuBar.view.terminal"),
    ]
  }

  const { isMenuOpen, activeItem, setActiveItem, toggleMenu } = useNavBar();

  const isHovered = activeItem === view.name && isMenuOpen;

  return (
    <div className="flex items-center text-[13px] relative z-20">

      <div className="relative">
        <button
          className={`px-2 py-0 hover:bg-hover transition-colors rounded-md z-50 ${isHovered ? 'bg-hover' : ''
            }`}
          onClick={toggleMenu}
          onMouseEnter={() => setActiveItem(view.name)}
        >
          {view.name}
        </button>

        {isHovered && (
          <div className="absolute top-full px-1 left-0 z-20 bg-background border border-border shadow-lg min-w-[200px] w-fit rounded-md">
            {view.items.map((item, index) => (
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

export default ViewItem;
