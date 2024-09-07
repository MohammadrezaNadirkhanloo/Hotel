import { Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Outlet } from "react-router-dom";
import Map from "./Map";

function AppLayout() {
  return (
    <Container sx={{mt:4}}>
      <Grid container>
        <Grid size={5}>
          <Outlet />
        </Grid>
        <Grid size={7}>
          <Map />
        </Grid>
      </Grid>
    </Container>
  );
}

export default AppLayout;
