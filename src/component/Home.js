import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Logout } from "../redux/action-creator";
import { Grid } from "@mui/material";
import CustomTextField from "./ui/Textfield";
import ButtonDesign from "./ui/ButtonDesign";
import { TitleStyled } from "./ui/StyledComponent";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

export default function Home() {
  const disPatch = useDispatch();
  let navigate = useNavigate();
  const isAuth = useSelector((state) => state.LoginState.isAuth);
  const parsedData = JSON.parse(localStorage.getItem("loginInfo"));
  const userName = parsedData.username;

  const handleLogout = () => {
    disPatch(Logout());
    localStorage.removeItem("loginInfo");
    navigate("/");
  };

  return (
    <div>
      <TitleStyled
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "3%",
          marginTop: "5%",
        }}
      >
        User : {userName} Home Page
      </TitleStyled>

      <Grid item xs={6} md={4}>
        <ButtonDesign
          name={"Flowers List"}
          action={() => {
            navigate("/flowers");
          }}
        />

        <ButtonDesign
          name={"Admin"}
          action={() => {
            navigate("/admin");
          }}
        />

        <ButtonDesign
          name={"Back"}
          action={() => {
            navigate("/");
          }}
        />

        <ButtonDesign name={"Logout"} action={handleLogout} />
      </Grid>
    </div>
  );
}
