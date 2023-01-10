import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import details from "./EventData";

const EventCard = () => {
  return (
    <>
      <h1 className="font-bold text-center text-[45px]">Events</h1>
      {details.map((event) => (
        <Card sx={{ maxWidth: 345, minHeight: 400 }} className="mb-10">
          <CardMedia
            component="img"
            height="140"
            image={event.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {event.head}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {event.desc}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href={event.learnLink}>
              Learn More
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
};

export default EventCard;
