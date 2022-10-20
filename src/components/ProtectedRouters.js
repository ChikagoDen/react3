import React from 'react';
import {useSelector} from "react-redux";
import RegisterPage from "../pages/RegisterPage";

const ProtectedRouters = ({children}) => {
    const user =useSelector(state => state.status.currentUser );
    if (!user) return <RegisterPage/>;

    return children;
};

export default ProtectedRouters;