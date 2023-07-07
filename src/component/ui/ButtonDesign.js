import React from "react";
import { useNavigate } from "react-router-dom";
import { Controller } from "react-hook-form";
import { Stack } from "@mui/material";

import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

function ButtonDesign({ name, action }) {
  return (
    <div>
      <Box display="flex" justifyContent="center">
        <Button
          variant="contained"
          color="secondary"
          onClick={action}
          sx={{
            width: "26%",
            height: "2%",
            borderRadius: "5px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: "1%",
            marginTop: "1%",
          }}
        >
          {name}
        </Button>
      </Box>
    </div>
  );
}

export default ButtonDesign;
