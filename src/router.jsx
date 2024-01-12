import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home"
import Todos from "./pages/Todos"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/todos",
        element: <Todos />
    }
])


export default router