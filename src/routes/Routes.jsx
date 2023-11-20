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
import ToyDetails from "../components/Toys/ToyDetails";
import AddToy from "../components/AddToy/AddToy";
import MyToys from '../components/MyToys/MyToys';
import Checkout from "../components/Checkout/Checkout";
import Wishlist from '../components/Wishlist/Wishlist';
import Cart from '../components/Cart/Cart';

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
                element: <Private><Toys></Toys></Private>,
            },
            {
                path: "toys/:id",
                element: <Private><ToyDetails></ToyDetails></Private>,
                loader: ({ params }) => fetch(`https://toy-corner-server-bd.vercel.app/products/${params.id}`)
            },
            {
                path: "add-toys",
                element: <Private><AddToy></AddToy></Private>
            },
            {
                path: "my-toys",
                element: <Private><MyToys></MyToys></Private>
            },
            {
                path: "wishlist",
                element: <Private><Wishlist></Wishlist></Private>
            },
            {
                path: "cart",
                element: <Private><Cart></Cart></Private>
            },
            {
                path: "checkout",
                element: <Private><Checkout></Checkout></Private>
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