import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const PrivateRoute = ({component: Component, path: Path, ...rest}) => {
  const { currentUser } = useContext(AuthContext);
  const { location, setLastLocation } = rest;

  if (!currentUser && location.pathname.includes('/app/')) {
    setLastLocation(location.pathname);
  }

  return (
    <Route path={Path} render={props => (
          !!currentUser && !!currentUser.uid ? <Component {...props} {...rest} /> : <Redirect to="/" />
      )} />
  );
};

export default PrivateRoute;