import { ThemeProvider } from "@mui/material/styles";
import Header from "./components/Header";
import { Theme } from "./components/ui/Theme";
import { Toaster } from "react-hot-toast";
import ListItem from "./components/ListItem";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Toaster />
        <Header />
        <Routes>
          <Route path="/Hotel" element={<ListItem />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
