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

function DialogSelect() {
  const [options, setOptions] = React.useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const handelSelect = (name, value) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleClickOpen}>
        <Typography
          sx={{ display: "flex", gap: 1 }}
          component={"span"}
          variant={"body2"}
        >
          <Box>
            <ManIcon />
            {options.adult} |
          </Box>
          <Box>
            {" "}
            <BoyIcon />
            {options.children || 0} |
          </Box>
          <Box>
            {" "}
            <BedIcon sx={{ mx: "2px" }} />
            {options.room || 0}
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
        <DialogTitle>Options</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
            <FormSelect
              type="adult"
              options={options}
              handelSelect={handelSelect}
              maxValue={7}
            />
            <FormSelect
              type="children"
              options={options}
              handelSelect={handelSelect}
              maxValue={5}
            />
            <FormSelect
              type="room"
              options={options}
              handelSelect={handelSelect}
              maxValue={4}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default DialogSelect;


const FormSelect = ({ type, options, handelSelect, maxValue }) => {
  let num = [];
  for (let index = 1; index <= maxValue; index++) {
    num = [...num, index];
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id={type}>{type}</InputLabel>
      <Select
        labelId={type}
        id="demo-dialog-select"
        value={options[type]}
        onChange={(e) => handelSelect(type, Number(e.target.value))}
        input={<OutlinedInput label={type} />}
      >
        {type === "children" ? (
          <MenuItem value="0">
            <em>0</em>
          </MenuItem>
        ) : null}
        {num.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
