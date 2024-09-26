import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import ProductsAndShop from "../pages/ProductsDetails/ProductsAndShop";
import Shop from "../pages/shop/Shop";
import MyAccount from "../authentication/MyAccount";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/Console',
                element: <ProductsAndShop />,
            },
            {
                path: '/product/:id',
                element: <ProductsAndShop />,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/api/product/${params.id}`)
            },

            // shop
            {
                path: "/shop",
                element: <Shop />
            },
           {
            path:'/my-account',
            element:<MyAccount/>
           }
            
        ]
    }
])