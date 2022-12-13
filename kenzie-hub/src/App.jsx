import React from "react";
import { ToastContainer } from "react-toastify";
import { Header } from "./components/Header";
import { UserProvider } from "./contexts/UserContext";
import { RouterMain } from "./routes";
import { GlobalStyles } from "./styles/globalStyles";
import { Reset } from "./styles/reset";
import { ApiTechsProvider } from "./contexts/ApiTechsContext";

function App() {
  return (
    <React.Fragment>
      <UserProvider>
        <ApiTechsProvider>
          <GlobalStyles />
          <Reset />
          <RouterMain />
          <ToastContainer />
        </ApiTechsProvider>
      </UserProvider>
    </React.Fragment>
  );
}

export default App;
