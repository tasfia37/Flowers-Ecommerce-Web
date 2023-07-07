import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Logout } from "../redux/action-creator";
import { Grid } from "@mui/material";
import CustomTextField from "./ui/Textfield";
import ButtonDesign from "./ui/ButtonDesign";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

export default function Admin() {
  let navigate = useNavigate();
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
        ADMIN SECTION
      </h2>

      <ButtonDesign
        name={"List"}
        action={() => {
          navigate("/flowers");
        }}
      />
      <ButtonDesign
        name={"Add"}
        action={() => {
          navigate("/add");
        }}
      />
      <ButtonDesign
        name={"Update"}
        action={() => {
          navigate("/update");
        }}
      />
      <ButtonDesign
        name={"Delete"}
        action={() => {
          navigate("/delete");
        }}
      />
      <ButtonDesign
        name={"Back"}
        action={() => {
          navigate("/home");
        }}
      />
    </div>
  );
}
