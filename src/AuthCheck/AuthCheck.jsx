import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';

const AuthCheck = ({children}) => {
    const { isAuthenticated } = useSelector((state) => state.auth);
    const location = useLocation();

    if(!isAuthenticated) {
        return <Navigate to='/auth/login' state={{ from: location }} />;
    }

    return children;
};

export default AuthCheck;