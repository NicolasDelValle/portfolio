import { Files } from "lucide-react";
import { ExtensionsIcon, SearchIcon, SourceControlIcon } from "../../icons";

function SubMenu() {
  return (
    <div className='border-b-[1px] border-b-border h-fit flex items-center px-1 py-0'>
      <button className='border-b-[1px] border-b-white p-1' aria-label="Explorer">
        <Files width={18} />
      </button>
      <button className=' p-1' aria-label="Source Control">
        <SourceControlIcon width={18} />
      </button>
      <button className=' p-1' aria-label="Search">
        <SearchIcon width={18} />
      </button>
      <button className=' p-1' aria-label="Extensions">
        <ExtensionsIcon width={18} />
      </button>

    </div>
  );
}

export default SubMenu;