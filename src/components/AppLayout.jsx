import { Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Outlet } from "react-router-dom";
import Map from "./Map";
import { useFilterHotel } from "./context/ListFilterProvider";

function AppLayout() {
  const { hotels, isLoading } = useFilterHotel([]);

  return (
    <Container sx={{ mt: 4 }}>
      <Grid container>
        <Grid size={5}>
          <Outlet />
        </Grid>
        <Grid size={7}>
          <Map markdown={hotels} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default AppLayout;
