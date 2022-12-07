import React from "react";
import { ToastContainer } from "react-toastify";
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
      <ToastContainer />
    </React.Fragment>
  );
}

export default App;
