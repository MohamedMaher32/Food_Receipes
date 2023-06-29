import { RouterProvider, createHashRouter } from "react-router-dom"
import Layout from "./Component/Layout/Layout"
import Home from "./Component/Home/Home"
import Dessert from "./Component/Dessert/Dessert"
import Pizza from "./Component/Pizza/Pizza"
import Pasta from "./Component/Pasta/Pasta"
import Footer from "./Component/Footer/Footer"
import Navbar from "./Component/Navbar/Navbar"
import Detalies from "./Component/Detalies/Detalies"
import Contact from "./Component/Contact/Contact"
import { FoodContextProvider } from "./Context/Context"
export default function App() {
  let routes = createHashRouter([{
    path: "", element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: "footer", element: <Footer /> },
      { path: "detalies/:id", element: <Detalies /> },
      { path: "navbar", element: <Navbar /> },
      { path: "dessert", element: <Dessert /> },
      { path: "pasta", element: <Pasta /> },
      { path: "pizza", element: <Pizza /> },
      { path: "contact", element: <Contact /> },
    ]
  }])
  return (
    <FoodContextProvider>
      <RouterProvider router={routes} />
    </FoodContextProvider>
  )
}
