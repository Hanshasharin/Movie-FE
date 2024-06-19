import { Navigate } from 'react-router-dom';

const PrivateUserRoutes = ({ children }) => {
    const token = sessionStorage.getItem('userToken'); // Assume 'userToken' is the key for user authentication token
    let auth = {};
    if (token) {
        auth = { 'token': true };
    } else {
        auth = { 'token': false };
    }

    return auth.token ? children : <Navigate to='/login' />;
};

export default PrivateUserRoutes;
