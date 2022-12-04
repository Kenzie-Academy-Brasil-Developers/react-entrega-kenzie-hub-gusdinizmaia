import React from "react";
import { Header } from "./components/Header";
import { RouterMain } from "./routes";
import { GlobalStyles } from "./styles/globalStyles";
import { Reset } from "./styles/reset";

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Reset />
      <RouterMain />
    </React.Fragment>
  );
}

export default App;
