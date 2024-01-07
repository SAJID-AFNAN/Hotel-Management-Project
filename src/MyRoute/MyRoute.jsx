import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Products from "../Components/Products/Products";
import Contact from "../Components/Contact/Contact";
import Blogs from "../Components/Blogs/Blogs";
import MainLayout from "../Components/MainLayout/MainLayout";

const myCreatedRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/products",
                element : <Products></Products>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>
            }
        ]
    }
])

export default myCreatedRouter;