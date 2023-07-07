import { useState, useEffect } from "react";
import "./App.css";
import { Typography, Box, TextField, Autocomplete } from "@mui/material";
import FilterPrducts from "./filterProducts";
import axios from "axios";

export const fetchdata = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    return response.data.products;
  } catch (error) {
    console.log(error);
  }
};

function SearchProduct() {
  return <div></div>;
}

export default SearchProduct;
