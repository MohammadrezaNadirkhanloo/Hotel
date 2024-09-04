import LocationOnIcon from "@mui/icons-material/LocationOn";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function InputWithIcon() {
  const [value, setValue] = useState("");

  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <LocationOnIcon color="primary" sx={{ mr: 1, my: 0.5 }} />
        <TextField
          id="input-with-sx"
          label="where to go?"
          variant="standard"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Box>
    </Box>
  );
}
