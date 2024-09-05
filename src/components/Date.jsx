import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import { format } from "date-fns";
import * as React from "react";
import { DateRange } from "react-date-range";

function Daterange({ date, setDate }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
          date[0].endDate,
          "MM/dd/yyyy"
        )}`}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box>
          <DateRange
            ranges={date}
            onChange={(item) => setDate([item.selection])}
            minDate={new Date()}
            moveRangeOnFirstSelection={true}
          />
        </Box>{" "}
      </Popover>
    </>
  );
}

export default Daterange;
