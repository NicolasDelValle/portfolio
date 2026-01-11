import { useNavBar } from "@/context/navBarContext";
import { useI18n } from "@/hooks/useI18n";
import Divider from "@mui/material/Divider";

function HelpItem() {
  const { t } = useI18n();

  const help = {
    name: t("menuBar.help.title"),
    items: [
      t("menuBar.help.welcome"),
      t("menuBar.help.documentation"),
      t("menuBar.help.showAllCommands"),
      "---",
      t("menuBar.help.keyboardShortcuts"),
      t("menuBar.help.videoTutorials"),
      "---",
      t("menuBar.help.reportIssue"),
      t("menuBar.help.viewLicense"),
      "---",
      t("menuBar.help.checkForUpdates"),
      t("menuBar.help.about"),
    ]
  }

  const { isMenuOpen, activeItem, setActiveItem, toggleMenu } = useNavBar();

  const isHovered = activeItem === help.name && isMenuOpen;

  return (
    <div className="flex items-center text-[13px] relative z-20">

      <div className="relative">
        <button
          className={`px-2 py-0 hover:bg-hover transition-colors rounded-md z-50 ${isHovered ? 'bg-hover' : ''
            }`}
          onClick={toggleMenu}
          onMouseEnter={() => setActiveItem(help.name)}
        >
          {help.name}
        </button>

        {isHovered && (
          <div className="absolute top-full px-1 left-0 z-20 bg-background border border-border shadow-lg min-w-[200px] w-fit rounded-md">
            {help.items.map((item, index) => (
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

export default HelpItem;
