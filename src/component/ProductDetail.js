import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Logout } from "../redux/action-creator";
import { Grid } from "@mui/material";
import CustomTextField from "./ui/Textfield";
import ImageCard from "./ui/ImageCard";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Container,
  Button,
  CardMedia,
} from "@mui/material";

export default function ProductDetail({}) {
  let navigate = useNavigate();
  const disPatch = useDispatch();

  const location = useLocation();
  const { name, price, quantity, image_url } = location.state;

  const handleLogout = () => {
    disPatch(Logout());
    localStorage.removeItem("loginInfo");
    navigate("/");
  };
  return (
    <div>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs={6} md={4}>
          <Button
            onClick={() => {
              navigate("/flowers");
            }}
            color="secondary"
          >
            Back
          </Button>

          <Button onClick={handleLogout} color="secondary">
            Logout
          </Button>
        </Grid>
      </Grid>

      <Container maxWidth="60%">
        <Box mt={4} textAlign="center">
          <Typography variant="h4">{name}</Typography>
          <Typography variant="h6" color="text.secondary">
            Price: {price}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Quantity: {quantity}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Description: Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s.
          </Typography>
        </Box>

        <Box mt={4} textAlign="center">
          <img src={image_url} alt={name} style={{ width: "40%" }} />
        </Box>
      </Container>
    </div>
  );
}
