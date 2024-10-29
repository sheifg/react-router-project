import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoutes = ({ user }) => {
  const location = useLocation();

  //! Location is a hook that returns an object which contains url location as pathanme, search as url queries, and state to receive incoming information
  // useLocation is used to reach the path, to understand where it is
  // If the user is trying to reach the people page writing directly in the browser(http://localhost:3004/people), it won't be possible, because people page is protected. It is necessary to log in. After log in, the user will be sent directly to the people page

  // If there is user, it will be shown the people list and in case the image is clicked, the person details
  // if there is no user, it will be sent to the login page (that part is just in case some user writes directly in the broswer ..../people)
  // return user ? <Outlet /> : <Navigate to="/login" />;
  return user ? (
    <Outlet />
  ) : (
    <Navigate
    
    to="/login"
    //! Option 1 - using search parameter(?) is a way to send information
      // to={`/login?next=${location.pathname}`}
      // With this /login?next=${location.pathname}, it is being indicated in case the user tries to reach the people page (location.pathname), that once the user logs in, the user is sent there
      //"next" is just a variable name, it can be called whatever it is wanted: next, goto....
      // e.g. <Navigate to={`/login?goto=${location.pathname}`} />
    

      //! Option 2 - using state (Login.jsx) to send information
      // state sends information to the path component, if it is wanted to send information. If state is not included, the value of state will be null
      state={{ from: location.pathname,  // This is the information, it is wanted to send: (location.pathname). "from" is just a variable, it can be called whatever it is wanted: data, info...
         message:"User needs authentication" }}
    />
  );
};

export default PrivateRoutes;

