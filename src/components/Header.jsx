import MenuIcon from "@mui/icons-material/Menu";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import { Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import Daterange from "./Date";
import DialogSelect from "./ui/DialogSelect";
import InputWithIcon from "./ui/InputWithIcon";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, display: { xs: "block", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <InputWithIcon />
              <Box>
                {/* <CalendarMonthIcon color="primary" />
                2020/55/55 */}
                <Daterange />
              </Box>
              <DialogSelect />
              <IconButton aria-label="delete" size="large">
                <SavedSearchIcon color="primary" fontSize="inherit" />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
