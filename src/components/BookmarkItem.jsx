import { Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Outlet, useSearchParams } from "react-router-dom";
import Map from "./Map";
function BookmarkItem() {
  const[searchParams,setSearchParams]=useSearchParams()
  console.log(searchParams.get("lat"));
  
  return (
    <Container sx={{ mt: 4 }}>
      <Grid container>
        <Grid size={5}>
          <Outlet />
        </Grid>
        <Grid size={7}>
          <Map markdown={[]} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default BookmarkItem;
