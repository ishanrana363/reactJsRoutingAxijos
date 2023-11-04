import React from 'react';
import {Navigate} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({isLogin,children}) => {
    if(!isLogin){
        return <Navigate to= "/" replace />
    }else {
        return children
    }
};

export default ProtectedRoute;