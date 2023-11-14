import { useContext } from "react";
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from "react-router-dom";
import { BallTriangle, Hourglass } from 'react-loader-spinner';

const Private = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    const location = useLocation();
    console.log(location);

    if (loading) {
        return                         <>
        <div className="flex items-center justify-center">
            <Hourglass
                visible={true}
                height="20"
                width="20"
                ariaLabel="hourglass-loading"
                wrapperStyle={{}}
                wrapperClass=""
                colors={['navy', 'crimson']}
            /><p className='ml-3 text-lg font-medium text-red-700'>Loading ...</p>
        </div>
    </>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default Private;