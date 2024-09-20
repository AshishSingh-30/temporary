import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { CiViewTable } from "react-icons/ci";
import { LuFileText } from "react-icons/lu";
import { GiExpense } from "react-icons/gi";
import { BsFuelPumpDiesel } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import { setIsSideCollapsed } from "@/slice";
import { insuranceImg } from "@/utils";

interface SidebarlinkProps {
  href: string;
  icon: React.ElementType;
  label: string;
  isCollapsed: boolean;
}

const SidebarLink = ({
  href,
  icon: Icon,
  label,
  isCollapsed,
}: SidebarlinkProps) => {
  const location = useLocation();
  const isActive =
    location.pathname === href ||
    (location.pathname === "/" && href === "/dashboard");

  return (
    <Link to={href}>
      <div
        className={` cursor-pointer flex items-center ${
          isCollapsed ? "justify-center py-4" : "justify-start px-3 py-4"
        } hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${
          isActive ? "bg-blue-200 text-white" : ""
        }`}
      >
        <Icon className="w-6 h-6 !text-gray-700" />
        <span
          className={` ${isCollapsed ? "hidden" : "block"}  ${
            isActive ? "text-gray-900 font-bold" : "text-gray-700 font-medium"
          } `}
        >
          {label}
        </span>
      </div>
    </Link>
  );
};

const Sidebar = () => {
  const dispatch = useDispatch();
  const isSidebarCollapsed = useSelector(
    (state) => state.global.isSidebarCollapsed
  );
  const toggleSidebar = () => {
    dispatch(setIsSideCollapsed(!isSidebarCollapsed));
  };

  const sidebarClassNames = `fixed flex flex-col ${
    isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
  } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`;

  return (
    <div className={sidebarClassNames}>
      <div
        className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${
          isSidebarCollapsed ? "px-4" : "px-8"
        }`}
      >
        <img src={insuranceImg} alt="logo" className="w-11" />
        <h1
          className={`${
            isSidebarCollapsed ? "hidden" : "block"
          } font-extrabold text-2xl`}
        >
          Temporary
        </h1>
        <button
          className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100
        "
          onClick={toggleSidebar}
        >
          <HiMenu className="w-4 h-4" />
        </button>
      </div>

      {/* /Links */}
      <div className="flex-grow mt-8">
        <SidebarLink
          href="/"
          icon={LuFileText}
          label="Insurance Form"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/insurancelist"
          icon={CiViewTable}
          label="Insurance List"
          isCollapsed={isSidebarCollapsed}
        />
      </div>

      {/* footer */}
      <div className={`${isSidebarCollapsed ? "hidden" : "block"} mb-10`}>
        <p className="text-center text-xs text-gray-500">
          &copy; 2024 Temporary UI
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
