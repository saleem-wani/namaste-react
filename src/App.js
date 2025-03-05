import React from "react";
import ReactDOM from "react-dom/client"
import About from "./components/About";
import Header from'./components/Header'
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider ,Outlet} from "react-router";
import Contact from "./components/Conatct";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestuarantMenu";


const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Outlet/>
       
        </div>
    )
}
const appRouter=createBrowserRouter([

    {
        path:"/",
        element:<AppLayout/>,
        children:[

            {

                path:"/",
                element:<Body />
            },

            {

                path:"/about",
                element:<About/>
            },
        
            {
        
                path:"/contact",
                element:<Contact/>
            },
            {
            path:"/restuarants/:resId",
            element:<RestaurantMenu/>
            }

        ],
        errorElement:<Error/>
    },
    
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)

