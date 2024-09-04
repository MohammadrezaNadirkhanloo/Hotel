import { Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import useFetch from "../hook/useFetch";

function ListItem() {
  const { data, isLoading } = useFetch("http://localhost:5000/hotels", "");
  if (isLoading) <p>loading</p>;
  return (
    <Container>
      <Grid container spacing={5} sx={{ mt: 5 }}>
        {data.map((item) => (
          <Grid key={item.id} size={4}>
            <Card key={item.id} sx={{ maxWidth: 345 }}>
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
                <Typography variant="body1">{item.price}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ListItem;
