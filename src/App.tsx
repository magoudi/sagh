import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import Navs from "./page/Navs";
import Store from "./page/Store";
import About from "./page/About";
import Materials from "./page/Materials";
import { useState } from "react";

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

const darktheme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#B5960A",
      light: "#FfD000",
      dark: "#877007",
    },
    background: {
      default: "#000000",
    },
  },
  typography: {
    fontFamily: "Libre Baskerville",
  },
});

function App() {
    const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <ThemeProvider theme={darkMode? darktheme: theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/sagh">
              <Route path="" element={<Navs set={setDarkMode}/>}>
                <Route path="" element={<Store />} />
                <Route path="about" element={<About />} />
                <Route path="materials" element={<Materials />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
