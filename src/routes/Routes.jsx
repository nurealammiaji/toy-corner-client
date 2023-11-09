import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Error from "../components/Error/Error";
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import Register from "../components/Register/Register";
import Forgot from "../components/Forgot/Forgot";
import Blog from "../components/Blog/Blog";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "blog",
                element: <Blog></Blog>
            },
            {
                path: "register",
                element: <Register></Register>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "forgot",
                element: <Forgot></Forgot>
            }
        ]
    }
])

export default Routes;