import { Route, Navigate } from 'react-router-dom';

const AuthRoute = ({
  authenticated, children, location, path, exact,
}) => (
  <Route path={path}>
    {authenticated ? children
      : <Navigate to={{ pathname: '/login', state: { from: location } }} />}
  </Route>
);

export default AuthRoute;
