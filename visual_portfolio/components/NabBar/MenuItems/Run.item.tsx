import { useNavBar } from "@/context/navBarContext";
import { useI18n } from "@/hooks/useI18n";
import Divider from "@mui/material/Divider";

function RunItem() {
  const { t } = useI18n();

  const run = {
    name: t("menuBar.run.title"),
    items: [
      t("menuBar.run.startDebugging"),
      t("menuBar.run.runWithoutDebugging"),
      t("menuBar.run.stopDebugging"),
      "---",
      t("menuBar.run.openConfigurations"),
      t("menuBar.run.addConfiguration"),
      "---",
      t("menuBar.run.toggleBreakpoint"),
      t("menuBar.run.stepOver"),
      t("menuBar.run.stepInto"),
      t("menuBar.run.stepOut"),
    ]
  }

  const { isMenuOpen, activeItem, setActiveItem, toggleMenu } = useNavBar();

  const isHovered = activeItem === run.name && isMenuOpen;

  return (
    <div className="flex items-center text-[13px] relative z-20">

      <div className="relative">
        <button
          className={`px-2 py-0 hover:bg-hover transition-colors rounded-md z-50 ${isHovered ? 'bg-hover' : ''
            }`}
          onClick={toggleMenu}
          onMouseEnter={() => setActiveItem(run.name)}
        >
          {run.name}
        </button>

        {isHovered && (
          <div className="absolute top-full px-1 left-0 z-20 bg-background border border-border shadow-lg min-w-[200px] w-fit rounded-md">
            {run.items.map((item, index) => (
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

export default RunItem;
