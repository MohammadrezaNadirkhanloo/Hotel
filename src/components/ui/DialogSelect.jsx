import BedIcon from "@mui/icons-material/Bed";
import BoyIcon from "@mui/icons-material/Boy";
import ManIcon from "@mui/icons-material/Man";
import { Slide, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import * as React from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogSelect() {
  const [open, setOpen] = React.useState(false);
  const [adult, setAdult] = React.useState("");
  const [children, setChildren] = React.useState("");
  const [room, setRoom] = React.useState("");

  const handleChangeAdult = (event) => {
    setAdult(Number(event.target.value) || "");
  };
  const handleChangeChildren = (event) => {
    setChildren(Number(event.target.value) || "");
  };
  const handleChangeRoom = (event) => {
    setRoom(Number(event.target.value) || "");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleClickOpen}>
        <Typography sx={{ display: "flex", gap: 1 }} component={'span'} variant={'body2'} >
          <Box>
            <ManIcon />
            {adult || 0} |
          </Box>
          <Box>
            {" "}
            <BoyIcon />
            {children || 0} |
          </Box>
          <Box>
            {" "}
            <BedIcon sx={{mx:"2px"}} />
            {room || 0}
          </Box>
        </Typography>
      </Button>
      <Dialog
        closeAfterTransition={false}
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <DialogTitle>Fill the form</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="adult">adult</InputLabel>
              <Select
                labelId="adult"
                id="demo-dialog-select"
                value={adult}
                onChange={handleChangeAdult}
                input={<OutlinedInput label="adult" />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>{" "}
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="children">Children</InputLabel>
              <Select
                labelId="children"
                id="demo-dialog-select"
                value={children}
                onChange={handleChangeChildren}
                input={<OutlinedInput label="Children" />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="Room">Room</InputLabel>
              <Select
                labelId="Room"
                id="demo-dialog-select"
                value={room}
                onChange={handleChangeRoom}
                input={<OutlinedInput label="Room" />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
