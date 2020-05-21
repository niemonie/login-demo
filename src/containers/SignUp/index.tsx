import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { SignUpForm } from "./SignUpForm";
import { useSignUpStyles } from "./useSignUpStyles";

const SignUp = () => {
  const classes = useSignUpStyles();

  return (
    <Container component="main" maxWidth="xs" className={classes.main}>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <SignUpForm />
      </div>
    </Container>
  );
};

export { SignUp };
