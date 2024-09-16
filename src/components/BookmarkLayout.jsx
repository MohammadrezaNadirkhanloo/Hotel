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
        <Grid size={5}>
          <Outlet />
        </Grid>
        <Grid size={7}>
          <Map markdown={Bookmarks} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default BookmarkLayout;
