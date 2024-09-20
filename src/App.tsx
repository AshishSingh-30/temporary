import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import { InsuranceForm, InsuranceList } from "./pages/pageIndex";
import { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";

function App() {
  const Layout = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    const isSidebarCollapsed = useSelector(
      (state) => state.global.isSidebarCollapsed
    );

    const isDarkMode = useSelector((state) => state.global.isDarkMode);

    useEffect(() => {
      if (isDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.add("light");
      }
    }, []);

    return (
      <div
        className={`${
          isDarkMode ? "dark" : "light"
        } flex bg-gray-50 text-gray-900 w-full min-h-screen`}
      >
        <Sidebar />
        <div
          className={`flex flex-col w-full h-full md:py-7 md:px-6 p-4 bg-gray-50 ${
            isSidebarCollapsed ? "md:pl-20" : "md:pl-[17rem]"
          }`}
        >
          <Navbar />
          <Outlet />
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <InsuranceForm />,
        },
        {
          path: "/insurancelist",
          element: <InsuranceList />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
