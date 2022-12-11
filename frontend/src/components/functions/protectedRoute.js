import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({
  components: Components,
  user,
  redirectTo,
  query = "",
  ...rest
}) => {
  return user ? (
    <Route {...rest}>
      {Components.map((component, idx) => {
        return <div key={idx}>{component}</div>;
      })}
    </Route>
  ) : (
    <Redirect
      to={{
        pathname: redirectTo ? redirectTo : "/",
        state: { to: query },
      }}
    />
  );
};

export default ProtectedRoute;
