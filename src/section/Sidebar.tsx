import { useSelector } from "react-redux";
import { selectSidebarOpen } from "../state/slices/openSlice";
import { menu } from "../schema/menu";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
    const isOpen = useSelector(selectSidebarOpen);
    console.log("🔍 Sidebar Component Rendered");
    console.log("Sidebar Open State:", isOpen);
    const navigate = useNavigate()
    
    return (
      <div
        className={`fixed top-0 left-0 h-full w-1/3 bg-linear-main shadow-lg bg-midnight transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } z-50`}
      >
        <div className="flex flex-col space-y-6 p-6 py-8 my-6 text-white">
      {menu.map(({ menu: menuName, route }) => (
        <ul key={menuName}>
          <li
            onClick={() => navigate(route)} 
            className="cursor-pointer hover:text-gray-300"
          >
            {menuName}
          </li>
        </ul>
      ))}
        </div>
      </div>
    );
  };