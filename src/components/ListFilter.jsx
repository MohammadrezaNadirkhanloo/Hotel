import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useFilterHotel } from "./context/ListFilterProvider";

function ListFilter() {
  const { hotels, isLoading } = useFilterHotel();
  const navigate = useNavigate();

  const handelId = (item) => {
    navigate(`${item.id}?lat=${item.latitude}&lng=${item.longitude}`);
  };
  if (isLoading) <p>loading</p>;
  return (
    <Box>
      <Typography variant="h5" component="div" color="primary">
        Search Results({hotels.length})
      </Typography>
      {hotels.map((item) => (
        <Card key={item.id} sx={{ mb: 2, maxWidth: 395 }}>
          <CardActionArea
            onClick={() => handelId(item)}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              backgroundColor: "#0f1214",
              gap: 2,
              p: 1,
            }}
          >
            <CardMedia
              component="img"
              sx={{ maxWidth: 130, borderRadius: 2 }}
              image={item.picture_url.url}
              alt={item.name}
            />
            <CardContent sx={{ p: 0 }}>
              <Typography gutterBottom variant="h6" component="div">
                {item.smart_location}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                €{item.price}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {item.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}

export default ListFilter;
