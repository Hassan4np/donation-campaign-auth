import { createBrowserRouter } from "react-router-dom";
import Mainpage from "./MainPage/Mainpage";
import Home from "./Home/Home";
import Donation from "./Donation/Donation";
import Statistics from "./Statistics/Statistics";
import CardDetails from "./CardDetails/CardDetails";
import Login from "./RegisterandLoginpage/Login";
import Register from "./RegisterandLoginpage/Register";
import PrivateRout from "./PrivateRout/PrivateRout";

const MyBrowser = createBrowserRouter([
    {
        path:"/",
        element:<Mainpage/>,
        children:[
            {
                path:"/",
                element:<Home/>,
                loader:()=>fetch('/data.json')
            },
            {
                path:"/donation",
                element:<PrivateRout><Donation/></PrivateRout>,
                loader:()=>fetch('/data.json')
            },
            {
                path:"/statistics",
                element:<Statistics/> 
            },
            {
                path:"/card/:id",
                element:<CardDetails/>,
                loader:()=>fetch('/data.json')
            },
            {
             path:"/login",
             element:<Login/>
            },
            {
              path:"/signup",
              element:<Register/>
            }
        ]
    }
])


export{ MyBrowser}