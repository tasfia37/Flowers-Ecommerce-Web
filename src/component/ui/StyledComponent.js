import { styled } from "@mui/material/styles";
import { TextField, Button, Typography } from "@mui/material";

export const TextFieldStyled = styled(TextField)(({ theme }) => ({
  [`& fieldset`]: {
    borderRadius: 2,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // border: `2px solid ${notchColor} !important`,
  },
  "& .MuiInputBase-root.Mui-disabled": {
    backgroundColor: "#f0f0f0",
    borderRadius: 2,
  },
}));

export const ButtonStyled = styled(Button)(({ theme }) => ({
  borderRadius: 2,
  marginTop: "10px",
  padding: "10px 20px",
  width: "180px",
  height: "30px",
  backgroundColor: "#edb9da", //"#fcdcf0",
  color: "#fff",
  fontWeight: "bold",
  textTransform: "uppercase",
  transition: "background-color 0.3s",
  "&:hover": {
    backgroundColor: "#e78bb1",
  },
}));

export const TitleStyled = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "24px",
  marginBottom: "30px",
  marginTop: "30px",
  textTransform: "uppercase",
  color: "#614e5a",
}));
