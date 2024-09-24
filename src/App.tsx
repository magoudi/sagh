import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import Navs from "./page/Navs";
import Store from "./page/Store";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#B5960A",
      light: "#FfD000",
      dark: "#877007",
    },
  },
  typography: {
    fontFamily: "Libre Baskerville",
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/sagh">
              <Route path="" element={<Navs />}>
                <Route path="" element={<Store />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
