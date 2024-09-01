import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import { CiCircleCheck } from "react-icons/ci";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Roboto",
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Alert icon={<CiCircleCheck fontSize="inherit" />} severity="success">
          <Typography variant="h1">
            Here is a gentle confirmation that your action was successful.
          </Typography>
        </Alert>
      </ThemeProvider>
    </>
  );
}

export default App;
