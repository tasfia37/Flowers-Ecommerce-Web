import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Login } from "../redux/action-creator";
import { useSelector, useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { Grid } from "@mui/material";
import CustomTextField from "./ui/Textfield";
import { ButtonStyled, TitleStyled } from "./ui/StyledComponent";
// import { schema, defaultState } from "./signupvalidation";

export default function LoginPage() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useForm({});
  const [data, setData] = useState([]);
  const disPatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3031/userDb")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const onSubmit = () => {
    //event.preventDefault();
    const { username, password } = getValues();
    const userData = data.find((user) => user.username === username);
    const userID = userData ? userData.id : null;

    if (userData) {
      if (userData.password !== password) {
        console.log("invalid user");
      } else {
        console.log("Logged In");

        if (!!username) {
          disPatch(Login(username, userID));

          const loginInfo = {
            username: username,
            userID: userID,
            isAuth: true,
          };
          localStorage.setItem("loginInfo", JSON.stringify(loginInfo));

          navigate("/home");
        }
      }
    } else {
      console.log("Invalid");
    }
  };

  // const onSubmit = (data) => {
  //   console.log(data);
  //   navigate("/home");
  // };

  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url(${require("../Assets/23.jpeg")})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Grid container justifyContent="center">
        <div
          style={{
            marginTop: "8%",
          }}
        >
          <TitleStyled>SignIn</TitleStyled>
        </div>

        <Grid container spacing={2} direction="column" alignItems="center">
          <Grid item md={2}>
            <CustomTextField
              control={control}
              label="User Name"
              name="username"
              required={true}
            />
          </Grid>
          <Grid item md={2}>
            <CustomTextField
              control={control}
              label="Password"
              name="password"
              required={true}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3} direction="column" alignItems="center">
          <Grid item xs={6} md={4}>
            <ButtonStyled onClick={handleSubmit(onSubmit)}>Login</ButtonStyled>{" "}
            <br />
            <ButtonStyled
              onClick={() => {
                navigate("/");
              }}
            >
              Back
            </ButtonStyled>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

//export default function Login() {
// const{register,handleSubmit,formState:{errors}} = useForm();

// const onSubmit = (data) =>{
//   console.log(data)
// }

// return (
//   <div>
//     <div>
//       <h2>Login Form</h2>
//     </div>
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div>
//         <label>Username:</label><br/>
//         <input type='text'
//         name='username'
//         {
//           ...register("username",{
//             required: "Username is required",

//           })
//         }

//         />
//       </div>
//       <div>
//         <label>Password:</label><br/>
//         <input type='password'
//         name='password'
//         {
//           ...register("password",{
//             required: "Password is required",
//             minLength: {
//               value: 3,
//               message: "Password should be atleast 3 characters."
//             }
//           })
//         }
//         />
//         {
//           errors.password && (<p className='errorMsg' >{errors.password.message}</p>)
//         }
//       </div>
//       <div>
//         <button type='submit' onClick={onSubmit} >Login</button>
//       </div>
//     </form>
//   </div>
// )
//}
