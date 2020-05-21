import React from "react";
import TextField from "@material-ui/core/TextField";
import { useFormikContext } from "formik";

import { ICredentials } from "modules/signUp/types/ICredentials";

const EmailTextField = () => {
  const {
    values,
    errors,
    touched,
    setFieldTouched,
    handleChange,
  } = useFormikContext<ICredentials>();

  return (
    <TextField
      error={touched.email && Boolean(errors.email)}
      variant="outlined"
      margin="normal"
      required
      fullWidth
      id="email"
      label="Email Address"
      name="email"
      autoComplete="email"
      autoFocus
      value={values.email}
      onChange={handleChange}
      onBlur={() => {
        setFieldTouched("email", true);
      }}
      helperText={touched.email && errors.email && String(errors.email)}
    />
  );
};

export { EmailTextField };
