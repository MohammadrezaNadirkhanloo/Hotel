import LocationOnIcon from "@mui/icons-material/LocationOn";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function InputWithIcon({ value, setValue }) {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <LocationOnIcon color="primary" sx={{ mr: 1, my: 0.5 }} />
        <TextField
          id="input-with-sx"
          label="where to go?"
          variant="standard"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoComplete="off"
        />
      </Box>
    </Box>
  );
}
