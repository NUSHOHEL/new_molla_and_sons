import { FaShop } from 'react-icons/fa6';
import { FaAngleDown } from 'react-icons/fa';
function Sidebar() {
  return (
    <div className="max-w-56 bg-regal-blue pt-7 h-screen text-center">
      <div className="flex flex-col items-center mx-4 leading-10 border-dashed border-b border-white ">
        <FaShop className="size-10 bg-white p-2 rounded-full" />
        <h1 className="text-white text-2xl font-bold text-[16px] flex items-center gap-2 ">
          New Molla & Sons <FaAngleDown className="size-4" />
        </h1>
      </div>
      <div>
      </div>
    </div>
  );
}

export default Sidebar;
