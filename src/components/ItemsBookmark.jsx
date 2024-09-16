import { useBookmarkList } from "./context/ListBookmarkProvider";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import ReactCountryFlag from "react-country-flag";
import { Link } from "react-router-dom";

function ItemsBookmark() {
  const { Bookmarks } = useBookmarkList();

  return (
    <>
      <List sx={{ width: "100%", maxWidth: 395, bgcolor: "background.paper" }}>
        {Bookmarks.map((item) => (
          <Link
            style={{ textDecoration: "none" }}
            key={item.id}
            to={`${item.id}?lat=${item.latitude}&lng=${item.longitude}`}
          >
            <ListItem
              sx={{
                mb: 2,
                cursor: "pointer",
                ":hover": { bgcolor: "#212121" },
              }}
            >
              <ListItemAvatar>
                <Avatar>
                  <ReactCountryFlag svg countryCode={item.countryCode} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                sx={{ color: "green" }}
                primary={item.cityName}
                secondary={item.country}
              />
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
}

export default ItemsBookmark;
