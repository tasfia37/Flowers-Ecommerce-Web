import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { Grid } from "@mui/material";
import CustomTextField from "./ui/Textfield";
import { schema, defaultState } from "./signupvalidation";
import { ButtonStyled, TitleStyled } from "./ui/StyledComponent";
import axios from "axios";

export default function Signup() {
  const {
    // register,
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultState,
  });

  const [data, setData] = useState([]);
  const [usernameTaken, setusernameTaken] = useState(false);

  let navigate = useNavigate();
  // console.log(getValues());

  useEffect(() => {
    axios
      .get("http://localhost:3031/userDb")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const onSubmit = async () => {
    const { username, password, confirmPassword } = getValues();

    const usernameFound = data.find((user) => user.username === username);
    if (usernameFound) {
      setusernameTaken(true);
      console.log("username taken");
    } else {
      setusernameTaken(false);
      if (password === confirmPassword) {
        try {
          const res = await axios.post(
            "http://localhost:3031/userDb",
            getValues()
          );

          navigate("/home");
          console.log(res);
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

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
        <div style={{ marginTop: "6%" }}>
          <TitleStyled>SignUP Form</TitleStyled>
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
              label="First Name"
              name="firstName"
              required={true}
            />
          </Grid>
          <Grid item md={2}>
            <CustomTextField
              control={control}
              label="Last Name"
              name="lastName"
              required={true}
            />
          </Grid>
          <Grid item md={2}>
            <CustomTextField
              control={control}
              label="Password"
              name="password"
              type="password"
              required={true}
            />
          </Grid>
          <Grid item md={2}>
            <CustomTextField
              control={control}
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              required={true}
            />
          </Grid>
        </Grid>

        {usernameTaken && (
          <p style={{ color: "red", fontWeight: "bold" }}>
            Username Already Taken.
          </p>
        )}
        <br />
        <Grid container spacing={3} direction="column" alignItems="center">
          <Grid item xs={6} md={4}>
            <ButtonStyled onClick={handleSubmit(onSubmit)}>SignUP</ButtonStyled>{" "}
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

{
  /* <div>
      <form onSubmit={handleSubmit(onSubmit)}>
          <label>Username:</label>
          <br />
          <input
            type="text"
            name="username"
            {...register("username", {
              required: "Username is required",
            })}
          />
        </div>

        <div>
          <label>First Name:</label>
          <br />
          <input {...register("firstName")} />
        </div>

        <div>
          <label>Last Name:</label>
          <br />
          <input {...register("lastname")} />
        </div>

        <div>
          <label>Gender:</label>
          <br />
          <select {...register("gender")}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
        </div>

        <div>
          <label>Password:</label>
          <br />
          <input
            type="password"
            name="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 3,
                message: "Password should be atleast 3 characters.",
              },
            })}
          />
          {errors.password && (
            <p className="errorMsg">{errors.password.message}</p>
          )}
        </div>

        <div>
          <label>Confirm Password:</label>
          <br />
          <input
            type="password"
            name="confirmPassword"
            {...register("confirmPassword", {
              required: "Password should match confirm password",
              minLength: {
                value: 3,
                message: "Password should be atleast 3 characters.",
              },
            })}
          />
          {errors.password && (
            <p className="errorMsg">{errors.password.message}</p>
          )}
        </div>

        <div>
          <button type="submit" onClick={onSubmit}>
            Login
          </button>
        </div>
      </form>
      <button>Back</button>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
        <Controller
          name="select"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={[
                { value: "chocolate", label: "Chocolate" },
                { value: "strawberry", label: "Strawberry" },
                { value: "vanilla", label: "Vanilla" },
              ]}
            />
          )}
        />
        <input type="submit" /> 
        
      <form/> 
    <div/> */
}
