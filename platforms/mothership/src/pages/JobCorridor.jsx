import React from "react";
import NavLayout from "../layouts/NavLayout";

const JobCorridor = React.lazy(() => import("enterprise/JobCorridor"));

const JobCorridorPlatform = () => (
  <React.Suspense fallback="Loading...">
    <NavLayout>
      <JobCorridor />
    </NavLayout>
  </React.Suspense>
);

export default JobCorridorPlatform;
