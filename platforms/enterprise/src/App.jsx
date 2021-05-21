import React from "react";

function App() {
  return (
    <React.Suspense fallback={null}>
      <div>Enterprise</div>
    </React.Suspense>
  );
}

export default App;
