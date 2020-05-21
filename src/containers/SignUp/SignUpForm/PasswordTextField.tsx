import React from "react";
import { useFormikContext } from "formik";
import TextField from "@material-ui/core/TextField";

import { ICredentials } from "modules/signUp/types/ICredentials";

const PasswordTextField = () => {
  const {
    values,
    errors,
    touched,
    setFieldTouched,
    handleChange,
  } = useFormikContext<ICredentials>();

  return (
    <TextField
      error={touched.password && Boolean(errors.password)}
      variant="outlined"
      margin="normal"
      required
      fullWidth
      name="password"
      label="Password"
      type="password"
      id="password"
      autoComplete="current-password"
      value={values.password}
      onChange={handleChange}
      onBlur={() => {
        setFieldTouched("password", true);
      }}
      helperText={
        touched.password && errors.password && String(errors.password)
      }
    />
  );
};

export { PasswordTextField };
