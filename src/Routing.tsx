import { Route, Routes } from "react-router-dom"
import { routes } from "./routes/routes"

export const Routing = () => {
  return (
    <Routes>
    {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  )
}
