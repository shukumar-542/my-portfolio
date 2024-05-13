import { Navigate, useLocation } from 'react-router-dom';
import { isLoggedIn } from '../utils/auth.service';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const location = useLocation()

    const user = isLoggedIn()
    if(user){
        return children
    }
    return <Navigate to='/login' state={{from : location}} ></Navigate>
};

export default PrivateRoute;