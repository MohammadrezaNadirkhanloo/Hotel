import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import ReactCountryFlag from "react-country-flag";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hook/useFetch";

function SingelBookmark() {
  const { id } = useParams();
  const { data: bookmark } = useFetch(`http://localhost:5000/bookmarks/${id}`);
  const navigate = useNavigate();

  return (
    <>
      <List sx={{ width: "100%", maxWidth: 395, bgcolor: "background.paper" }}>
        <ListItem
          sx={{
            mb: 2,
            cursor: "pointer",
            ":hover": { bgcolor: "#212121" },
          }}
        >
          <ListItemAvatar>
            <Avatar>
              <ReactCountryFlag svg countryCode={bookmark.countryCode} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            sx={{ color: "green" }}
            primary={bookmark.cityName}
            secondary={bookmark.country}
          />
        </ListItem>
      </List>
      <Button variant="contained" onClick={() => navigate(-1)}>
        Back
      </Button>
    </>
  );
}

export default SingelBookmark;
