import React from "react";
import { Form, Formik } from "formik";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import { validationSignUpFormSchema } from "./validationSignUpFormSchema";

import { Button } from "components/Button";

const SignUpForm = () => {
  const useStyles = makeStyles((theme) => ({
    form: {
      width: "100%",
      marginTop: theme.spacing(1),
    },
  }));

  const classes = useStyles();
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validationSignUpFormSchema}
      onSubmit={() => {}}
      render={(props) => (
        <Form className={classes.form}>
          <TextField
            error={Boolean(props.errors.email)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={props.values.email}
            onChange={props.handleChange}
            helperText={props.errors.email && String(props.errors.email)}
          />
          <TextField
            error={Boolean(props.errors.password)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={props.values.password}
            onChange={props.handleChange}
            helperText={props.errors.password && String(props.errors.password)}
          />

          <Button>Sign In</Button>
        </Form>
      )}
    />
  );
};

export { SignUpForm };
