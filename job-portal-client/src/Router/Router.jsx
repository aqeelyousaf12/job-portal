import App from "../App"
import {createBrowserRouter} from "react-router-dom"
import Home from "../Pages/Home"
import Createjob from "../Components/Createjob"
const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {path : "/",element:<Home/>},
        {
           path: "/post-job",element:<Createjob/>
        }
       
    ],
    },
  ])
  export default router