import { BrowserRouter } from "react-router-dom";
import React from "react";
import Routes from "./Routes";


function App() {
  return (
    <BrowserRouter>
      <div className={classes.root}>
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
