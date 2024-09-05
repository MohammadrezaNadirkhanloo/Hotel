import { Box, Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import useFetch from "../hook/useFetch";
import Skeleton from "@mui/material/Skeleton";

function ListItem() {
  const { data, isLoading } = useFetch("http://localhost:5000/hotels", "");
  if (isLoading)
    <Box>
      <Skeleton animation="wave" width={150} height={20} />
    </Box>;
  const style = {
    borderRadius: 4,
    cursor: "pointer",
    " :hover": {
      color: "green",
    },
  };
  return (
    <Container>
      <Grid container spacing={4} sx={{ mt: 5 }}>
        {data.map((item) => (
          <Grid key={item.id} size={{ xs: 12, sm: 6, lg: 4 }}>
            <Card sx={style}>
              <CardMedia
                component="img"
                alt={item.name}
                height="140"
                image={item.picture_url.url}
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
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ListItem;
