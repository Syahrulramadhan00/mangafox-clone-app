import { useNavigate } from "react-router-dom"
import { menu } from "../../schema/menu"

export const MenuNavbar = () => {
    
    const navigate = useNavigate()
    return (
    <div className="flex flex-row space-x-12 font-mona text-light justify-center items-center">
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
  )
}
