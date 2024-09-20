import { setIsDarkMode, setIsSideCollapsed } from "@/slice";
import {  MenuIcon, Moon, Sun } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const isSidebarCollapsed = useSelector(
    (state) => state.global.isSidebarCollapsed
  );

  const isDarkMode = useSelector((state) => state.global.isDarkMode);

  const toggleSidebar = () => {
    dispatch(setIsSideCollapsed(!isSidebarCollapsed));
  };

  const toggleDarkMode = () => {
    dispatch(setIsDarkMode(!isDarkMode));
  };

  return (
    <div className="flex justify-between items-center w-full mb-7">
      {/* left */}
      <div className="flex justify-between items-center gap-5">
        <button
          className="px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={toggleSidebar}
        >
          <MenuIcon className="w-4 h-4" />
        </button>
        <h3 className="md:text-xl text-base md:font-medium font-semibold">
          Hello, <span className="font-semibold">Ashish Singh</span>
        </h3>
      </div>

      {/* right */}
      <div className="flex justify-between items-center gap-5">
        <button onClick={toggleDarkMode}>
          {isDarkMode ? (
            <Sun className="cursor-pointer text-gray-500" size={24} />
          ) : (
            <Moon className="cursor-pointer text-gray-500" size={24} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
