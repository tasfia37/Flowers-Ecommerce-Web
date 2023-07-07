import React from "react";
import { useNavigate } from "react-router-dom";
import { Controller } from "react-hook-form";
import { Stack } from "@mui/material";
import ProductDetail from "../ProductDetail";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

export default function ImageCard({ key, name, price, quantity, image_url }) {
  let navigate = useNavigate();

  const navigateToDetails = () => {
    navigate("/details", {
      state: { name, price, quantity, image_url },
    });
  };

  return (
    <div>
      <Box
        width="300px"
        marginTop="2%"
        marginLeft="2%"
        marginBottom="2%"
        // marginRight="2%"
      >
        <Card id={key}>
          <CardMedia
            component="img"
            height="250"
            image={image_url}
            // image="https://www.bhg.com/thmb/XGP-k4Fl56Q4ru-ZatmxiI523e4=/1863x0/filters:no_upscale():strip_icc()/white-easter-lillies-6ef4334275fd4a7084bd2a102baba67c.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
              {/* React */}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {price} BDT
              <br />
              {quantity} PCS
              {/* Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s. */}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Add to Cart</Button>
            <Button size="small" onClick={navigateToDetails}>
              View
            </Button>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
}
