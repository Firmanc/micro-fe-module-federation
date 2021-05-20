import { Link } from "react-router-dom";

import React from "react";

function MainLayout({ children }) {
  return (
    <div className={classes.root}>
      <nav><Link to="/onboarding">Onboarding</Link></nav>
      <div className={classes.content}>{children}</div>
    </div>
  );
}

export default Page;
