import { useContext } from "react";
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from "react-router-dom";


const Private = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    const location = useLocation();
    console.log(location);

    if (loading) {
        return <div className="text-center">
            <button className="text-red-600 btn btn-ghost">
                <span className="loading loading-spinner"></span>
                Loading
            </button>
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default Private;