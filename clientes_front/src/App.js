import React from "react";
import Routes from "./routes";
import { Provider } from "react-redux";
import { store, persistor } from "./store/index";
import { PersistGate } from "redux-persist/integration/react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    background: { default: "#00ff9a" }
  }
});

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
