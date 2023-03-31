import { GlobalStyle } from "./styles/GlobalStyle";
import React from "react";
import { AppRoutes } from "./routes";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <AppRoutes />
    </React.Fragment>
  );
}

export default App;
