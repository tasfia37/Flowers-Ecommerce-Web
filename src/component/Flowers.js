import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Logout } from "../redux/action-creator";
import { Grid } from "@mui/material";
import { ButtonStyled, TitleStyled } from "./ui/StyledComponent";
import ImageCard from "./ui/ImageCard";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

// import img from "../Assets/images/1.jpg";

export default function Flowers() {
  const [data, setData] = useState([]);
  let navigate = useNavigate();
  const disPatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:3031/flowersDb")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const flowersList = data.map((item) => (
    <Box key={item.id} marginRight="2%">
      <ImageCard
        //key={item.id}
        name={item.flowerName}
        price={item.price}
        quantity={item.quantity}
        image_url={item.image}
      />
    </Box>
  ));

  //   const flowersList = data.map((item) => {
  //     console.log(item.image);
  //     return (
  //       <div>
  //         <div key={item.id}>
  //           <div>
  //             <h4>{item.flowerName}</h4>
  //           </div>
  //           <div>{item.price} BDT</div>
  //           <div>{item.quantity} PCS</div>
  //           <img alt="img" src={item.image} style={{ width: "10%" }} />
  //         </div>
  //       </div>
  //     );
  // });

  const handleLogout = () => {
    disPatch(Logout());
    localStorage.removeItem("loginInfo");
    navigate("/");
  };

  if (!!data.length) {
    return (
      <div>
        <Grid item xs={6} md={4}>
          <Button
            onClick={() => {
              navigate("/home");
            }}
            color="secondary"
          >
            Back
          </Button>
          <Button onClick={handleLogout} color="secondary">
            Logout
          </Button>
        </Grid>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TitleStyled>Flowers List</TitleStyled>
        </div>

        <Grid
          container
          justifyContent="center"
          style={{ marginBottom: "5%", marginRight: "2%" }}
        >
          {flowersList}
        </Grid>
      </div>
    );
  }

  return null;
}
