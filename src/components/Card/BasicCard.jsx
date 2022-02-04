import * as React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import SpeedRoundedIcon from "@material-ui/icons/SpeedOutlined";
import Typography from "@mui/material/Typography";
export default function BasicCard({ component, data }) {
  function copyToClipboard(link) {
    var textField = document.createElement("textarea");
    textField.innerText = link;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  }
  return (
    <>
      <Card
        sx={{
          margin: "20px",
          maxWidth: 445,
          backgroundColor: "#0d0101",
          color: "white",
          padding: "20px",
          overflow: "unset",
        }}
      >
        <CardContent>
          <SpeedRoundedIcon
            style={{
              color: "red",
              marginBottom: "10px",
              height: "30px",
              width: "30px",
            }}
          />
          <Typography textOverflow={"ellipses"} noWrap variant="h6">
            {data.name}
          </Typography>
          <Typography variant="body2">Category: {data.category}</Typography>
          <Typography variant="body2">Size: {data.size}</Typography>
          <Typography variant="body2">Leechers: {data.leechers}</Typography>
          <Typography variant="body2">Seeders: {data.seeders}</Typography>

          <Button
            sx={{
              marginTop: "10px",
            }}
            color="error"
            variant="outlined"
            onClick={() => {
              copyToClipboard(data.magnetLink);
              alert("Magnet Link Copied!");
            }}
          >
            Copy Link
          </Button>
        </CardContent>
      </Card>
    </>
  );
}
