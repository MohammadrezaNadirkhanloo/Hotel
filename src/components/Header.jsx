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
import { createSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [value, setValue] = useState("");
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
      color: "green",
    },
  ]);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const navigate = useNavigate();

  const handelSearch = () => {
    const encodeParams = createSearchParams({
      date: JSON.stringify(date),
      value,
      options: JSON.stringify(options),
    });

    navigate({
      pathname: "/hotels",
      search: encodeParams.toString(),
    });
  };
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
              <InputWithIcon value={value} setValue={setValue} />
              <Box>
                {/* <CalendarMonthIcon color="primary" />
                2020/55/55 */}
                <Daterange date={date} setDate={setDate} />
              </Box>
              <DialogSelect options={options} setOptions={setOptions} />
              <IconButton
                aria-label="delete"
                size="large"
                onClick={handelSearch}
              >
                <SavedSearchIcon color="primary" fontSize="inherit" />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
