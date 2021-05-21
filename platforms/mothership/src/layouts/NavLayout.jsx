import { Link } from "react-router-dom";

import React from "react";

function NavLayout({ children }) {
  return (
    <div>
      <nav className="nav">
        <Link className="nav-link" to="/job-corridor">Job Corridor</Link>
        <Link className="nav-link" to="/job-profiles">Job Profiles</Link>
        <Link className="nav-link" to="/onboarding">Onboarding</Link>
      </nav>
      <div className="content" >{children}</div>
    </div>
  );
}

export default NavLayout;