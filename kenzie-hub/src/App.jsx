import React from "react";
import { ToastContainer } from "react-toastify";
import { Header } from "./components/Header";
import { UserProvider } from "./contexts/UserContext";
import { RouterMain } from "./routes";
import { GlobalStyles } from "./styles/globalStyles";
import { Reset } from "./styles/reset";

function App() {
  return (
    <React.Fragment>
      <UserProvider>
        <GlobalStyles />
        <Reset />
        <RouterMain />
        <ToastContainer />
      </UserProvider>
    </React.Fragment>
  );
}

export default App;
