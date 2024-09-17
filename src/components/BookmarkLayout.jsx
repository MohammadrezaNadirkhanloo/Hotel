import { Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Outlet } from "react-router-dom";
import Map from "./Map";
import { useBookmarkList } from "./context/ListBookmarkProvider";
function BookmarkLayout() {
  const { Bookmarks } = useBookmarkList();

  return (
    <Container sx={{ mt: 4 }}>
      <Grid container>
        <Grid size={{ md: 5, xs: 12 }}>
          <Outlet />
        </Grid>
        <Grid size={{ md: 7, xs: 12 }}>
          <Map markdown={Bookmarks} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default BookmarkLayout;
