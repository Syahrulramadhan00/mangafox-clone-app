import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar, selectSidebarOpen } from "../state/slices/openSlice";
import { LogoText } from "../component/navbar/LogoText";
import { MenuNavbar } from "../component/navbar/MenuNavbar";
import { SearchBar } from "../component/navbar/SearchBar";
import Hamburger from "hamburger-react";
import { Sidebar } from "./Sidebar";

export const Navbar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectSidebarOpen);

  console.log("Navbar open state", isOpen);

  return (
    <>
      {/* Navbar */}
      <div className="w-full h-16 bg-midnight flex justify-between items-center px-8 md:px-36">
        <div className="flex flex-row space-x-6 md:space-x-12">
          <LogoText />
          <div className="hidden md:block py-4">
            <MenuNavbar />
          </div>
        </div>

        <div className="block md:hidden">
          <Hamburger
            toggled={isOpen}
            toggle={() => dispatch(toggleSidebar())}
            color="#F9F9F9"
            rounded
            size={28}
          />
        </div>

        <div className="hidden md:block">
          <SearchBar />
        </div>
      </div>

      {/* Sidebar (Only visible when isOpen is true) */}
      {isOpen && <Sidebar />}
    </>
  );
};
