import { Controller } from "react-hook-form";
import { Stack } from "@mui/material";

import { TextFieldStyled } from "./StyledComponent";

function CustomTextField({
  name,
  control,
  label,
  rules,
  required,
  disabled,
  type,
}) {
  return (
    <Stack>
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue=""
        render={({
          field: { onChange, value },
          fieldState: { error, isTouched },
        }) => {
          return (
            <>
              <TextFieldStyled
                fullWidth
                disabled={disabled}
                required={required}
                select={false}
                onChange={onChange}
                value={value}
                label={label}
                error={!!error?.message}
                helperText={!!error?.message ? error.message : ""}
                autoComplete="off"
                type={type}
                size="small"
                variant="outlined"
                placeholder={label.toUpperCase()}
                InputProps={{
                  sx: {
                    // height: height,
                    fontSize: 13,
                  },
                }}
                inputProps={{
                  // tabIndex: props.tabIndex,
                  // maxLength: props.maxLength,
                  // onKeyPress: props.onKeyPress,
                  style: {
                    // textTransform: capitalize ? "none" : "uppercase",
                    fontSize: 11,
                    fontWeight: "bolder",
                  },
                }}
                InputLabelProps={{
                  sx: {
                    // color: `${notchColor} !important`,
                    fontSize: 11,
                    fontWeight: "bold",
                    backgroundColor: "#FFFFFF",
                    textTransform: "uppercase",
                  },
                  shrink: true,
                  // shrink: isTouched,
                }}
              />
            </>
          );
        }}
      />
    </Stack>
  );
}

export default CustomTextField;
