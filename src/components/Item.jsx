import { useParams } from "react-router-dom";
import useFetch from "../hook/useFetch";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

function Item() {
  const { id } = useParams();
  const { data: item, isLoading } = useFetch(
    `http://localhost:5000/hotels/${id}`
  );

  const style = {
    borderRadius: 4,
    cursor: "pointer",
    " :hover": {
      color: "green",
    },
  };

  if (isLoading) return <p>loading</p>;
  return (
    <Box sx={{ px: 3 }}>
      <Card sx={style}>
        <CardMedia
          component="img"
          alt={item.name}
          height="140"
          image={item.xl_picture_url}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.smart_location}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {item.name}
          </Typography>
          <Typography variant="body1">€{item.price}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Item;
