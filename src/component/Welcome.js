import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Logout } from "../redux/action-creator";
import { Grid } from "@mui/material";
import ButtonDesign from "./ui/ButtonDesign";
import CustomTextField from "./ui/Textfield";

function Welcome() {
  const isAuth = useSelector((state) => state.LoginState.isAuth);
  const disPatch = useDispatch();
  let navigate = useNavigate();

  const handleLogout = () => {
    disPatch(Logout());
    localStorage.removeItem("loginInfo");
    navigate("/");
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url(${require("../Assets/images/26.jpg")})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "3%",
          marginTop: "5%",
        }}
      >
        Welcome To Buttercup Blooms.co
      </h1>

      {isAuth && (
        <ButtonDesign
          name={"Home"}
          action={() => {
            navigate("/home");
          }}
        />
      )}

      {isAuth && <ButtonDesign name={"Logout"} action={handleLogout} />}

      <Grid item xs={6} md={4}>
        <ButtonDesign
          name={"Signup"}
          action={() => {
            navigate("/signup");
          }}
        />

        <ButtonDesign
          name={"Login"}
          action={() => {
            navigate("/login");
          }}
        />
      </Grid>
    </div>
  );
}

export default Welcome;
