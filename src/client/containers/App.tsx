import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { PublicRoute } from "@/router/PublicRoute";
import { PrivateRoute } from "@/router/PrivateRoute";
import { LandingPage } from "@/containers/LandingPage";
import { LoginPage } from "@/containers/LoginPage";

import { getAuth } from "@/selectors";
import { loginUser } from "@/slices/auth";
import LoadingBar from "react-top-loading-bar";

export const App: React.FC = () => {
  const { loading } = useSelector(getAuth);
  const dispatch = useDispatch<any>();

  const _login = () => dispatch(loginUser());
  useEffect(() => {
    _login();
  }, []);

  // if (loading) {
  //   return (
  //     <>
  //       <LoadingBar color="#0969da" progress={10} />
  //     </>
  //   );
  // }

  return (
    <>
      {loading && <LoadingBar color="#0969da" progress={10} />}
      <PublicRoute exact path="/" component={LoginPage} />
      <PrivateRoute path="/app" component={LandingPage} />
      {/* <Redirect to="/" /> */}
    </>
  );
};

export default App;
