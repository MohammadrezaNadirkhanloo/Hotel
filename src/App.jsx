import { ThemeProvider } from "@mui/material/styles";
import Header from "./components/Header";
import { Theme } from "./components/ui/Theme";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Header />

      </ThemeProvider>
    </>
  );
}

export default App;
