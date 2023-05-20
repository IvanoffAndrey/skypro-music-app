import { GlobalStyle } from "./styles/GlobalStyle";
import React from "react";
import { AppRoutes } from "./routes";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user)

  return (
    <React.Fragment>
      <GlobalStyle />
      <AppRoutes user={user}/>
    </React.Fragment>
  );
}

export default App;
