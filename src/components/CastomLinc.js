import React from 'react';
import {Link, useMatch} from "react-router-dom";

const CustomLinc = ({to,children}) => {
    const match = useMatch(to);
    return (
        <Link to={to} style={{color:match?"red":"black"}} className={match ? "active" : ''}>
            <p className={match ? "active" : ''}> {children} </p>
        </Link>
    );
};

export default CustomLinc;