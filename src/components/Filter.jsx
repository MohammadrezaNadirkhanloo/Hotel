import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import Daterange from "./Date";
import DialogSelect from "./ui/DialogSelect";
import InputWithIcon from "./ui/InputWithIcon";

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(searchParams.get("value") || "");
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
      pathname: "filter",
      search: encodeParams.toString(),
    });
  };
  return (
    <Box>
      <Grid container spacing={2} sx={{ alignItems: "center" }}>
        <Grid item size={{ md: 4, xs: 12 }} sx={{ textAlign: "center" }}>
          <InputWithIcon value={value} setValue={setValue} />
        </Grid>
        <Grid item size={{ md: 4, xs: 12 }} sx={{ textAlign: "center" }}>
          <Daterange date={date} setDate={setDate} />
        </Grid>
        <Grid item size={{ md: 3, xs: 12 }} sx={{ textAlign: "center" }}>
          <DialogSelect options={options} setOptions={setOptions} />
        </Grid>
        <Grid item size={{ md: 1, xs: 12 }} sx={{ textAlign: "center" }}>
          <IconButton aria-label="delete" size="large" onClick={handelSearch}>
            <SavedSearchIcon color="primary" fontSize="inherit" />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Filter;
