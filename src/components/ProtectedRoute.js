import React from 'react';
import { Navigate } from "react-router-dom";

// этот компонент принимает другой компонент в качестве пропса
const ProtectedRouteElement = ({ element: Component, ...props  }) => {
  return (
    props.loggedIn ? <Component {...props} /> : <Navigate to="/sign-up" replace/>
)}

export default ProtectedRouteElement; 