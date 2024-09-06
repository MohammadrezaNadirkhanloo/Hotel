import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate, useSearchParams } from "react-router-dom";
import useFetch from "../hook/useFetch";

function ListFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const valueSearch = searchParams.get("value");
  const filterNumber = JSON.parse(searchParams.get("options"));
  const navigate = useNavigate();

  const { data, isLoading } = useFetch(
    "http://localhost:5000/hotels",
    `host_location_like=${valueSearch || ""}&accommodates_gte=${
      filterNumber.room || 1
    }`
  );
  const handelId = (item) => {
    navigate(`${item.id}?lat=${item.latitude}&lng=${item.longitude}`);
  };
  if (isLoading) <p>loading</p>;
  return (
    <Box>
      <Typography variant="h5" component="div" color="primary">
        Search Results({data.length})
      </Typography>
      {data.map((item) => (
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
