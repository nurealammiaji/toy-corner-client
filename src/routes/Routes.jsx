import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Error from "../components/Error/Error";
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import Register from "../components/Register/Register";
import Forgot from "../components/Forgot/Forgot";
import Blog from "../components/Blog/Blog";
import Profile from '../components/Profile/Profile';
import Private from "./Private";
import Toys from '../components/Toys/Toys';

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
                path: "toys",
                element: <Toys></Toys>,
                loader: () => fetch('http://localhost:5000/products')
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
            },
            {
                path: "profile",
                element: <Private><Profile></Profile></Private>
            },
        ]
    }
])

export default Routes;