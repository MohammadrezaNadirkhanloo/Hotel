import { ThemeProvider } from "@mui/material/styles";
import Header from "./components/Header";
import { Theme } from "./components/ui/Theme";
import { Toaster } from "react-hot-toast";
import ListItem from "./components/ListItem";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Toaster />
        <Header />
        <ListItem />
      </ThemeProvider>
    </>
  );
}

export default App;
