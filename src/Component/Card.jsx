import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Margin } from "@mui/icons-material";
import { Chip } from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard({
  title,
  postedBy,
  postedByEmail,
  description,
  roles,
  isJob,
}) {
  const handleClick = () => {};

  return (
    <Card
      variant="outlined"
      sx={{
        minWidth: 275,
        backgroundColor: "#f2f2f2",
        marginBottom: "20px",
        width: "700px",
      }}
    >
      <CardContent>
        <h1 className="font-bold mb-2 text-sm text-blue-500"> {title}</h1>
        <h1 className="text-xl mg-1">{description}</h1>
        <h1 className="text-gray-400 text-sm mb-1">{postedByEmail}</h1>
        <h1 className=" text-sm mb-1">{roles}</h1>
        {isJob ? (
          <Button
            variant="contained"
            onClick={handleClick}
            sx={{ marginTop: "5px" }}
          >
            Apply
          </Button>
        ) : null}
      </CardContent>
    </Card>
  );
}
