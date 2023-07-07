import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import ButtonDesign from "./ui/ButtonDesign";

import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Container,
  Button,
  CardMedia,
  TextField,
} from "@mui/material";

export default function DeleteProduct() {
  const { register, handleSubmit, reset, getValues } = useForm();
  let navigate = useNavigate();

  const onSubmit = (data) => {
    // Perform the necessary action with the form data (e.g., submit to server)
    try {
      const res = axios.post("http://localhost:3031/flowersDb", getValues());

      //navigate("/admin");
      console.log(res);
    } catch (error) {
      console.log(error);
    }

    // Reset the form fields
    reset();
  };
  return (
    <div>
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "3%",
          marginTop: "5%",
        }}
      >
        Delete a new Product
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" flexDirection="column" maxWidth="400px" m="auto">
          <TextField
            label="Name"
            type="text"
            {...register("flowerName", { required: true })}
            margin="normal"
          />

          <TextField
            label="Price"
            type="number"
            {...register("price", { required: true })}
            margin="normal"
          />

          <TextField
            label="Quantity"
            type="number"
            {...register("quantity", { required: true })}
            margin="normal"
          />

          <TextField
            label="Image URL"
            type="url"
            {...register("image", { required: true })}
            margin="normal"
          />

          <Button type="submit" variant="contained" color="secondary">
            Add Product
          </Button>
        </Box>
      </form>
      <ButtonDesign
        name={"Back"}
        action={() => {
          navigate("/admin");
        }}
      />
    </div>
  );
}
