import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Error from "../components/Error/Error";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <Error></Error>
    }
])

export default Routes;