import React from "react";
import BaseLayout from "../layouts/BaseLayout";

const Login = React.lazy(() => import("authApp/Login"));

const Auth = () => (
  <React.Suspense fallback="Loading...">
    <BaseLayout>
      <Login />
    </BaseLayout>
  </React.Suspense>
);

export default Auth;
