import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import general from "../../services/general";

export default function MediaCard({ imagePath, name, overview, runtime }) {
  return (
    <Card
      sx={{
        margin: "20px",
        maxWidth: 345,
        backgroundColor: "#0d0101",
        color: "white",
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={general.image.background + imagePath}
        alt={name}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body1" color="red">
          {runtime + " mins"}
        </Typography>
        <Typography variant="body2" color="white">
          {overview}
        </Typography>
      </CardContent>
    </Card>
  );
}
