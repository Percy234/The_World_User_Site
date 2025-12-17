import {
    createBrowserRouter,
} from "react-router-dom";

//layouts
import MainLayout from "../layouts/MainLayout.jsx";

//pages
import Home from "../pages/Home.jsx";
import Hierarchy from "../pages/Hierarchy.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
        ]
    },
    {
        path: "/hierarchy",
        element: <MainLayout />,
        children: [
            {
                path: "/hierarchy",
                element: <Hierarchy />
            }
        ]
    }
]);

export default router;