import React from "react";
import NavLayout from "../layouts/NavLayout";

const JobProfiles = React.lazy(() => import("enterprise/JobProfiles"));

const JobProfilesPlatform = () => (
  <React.Suspense fallback="Loading...">
    <NavLayout>
      <JobProfiles />
    </NavLayout>
  </React.Suspense>
);

export default JobProfilesPlatform;