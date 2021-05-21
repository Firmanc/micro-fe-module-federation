import { Divider, ThemeProvider, Typography } from "@material-ui/core";

import { BrowserRouter } from "react-router-dom";
import React from "react";
import Login from "./Login";
import { theme } from "./theme";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <React.Suspense fallback={null}>
          <Login />
        </React.Suspense>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
