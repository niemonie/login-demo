import React, { useState } from "react";
import fetchMock from "fetch-mock";
import styled from "styled-components";
import { Form, Formik } from "formik";

import { validationSignUpFormSchema } from "./validationSignUpFormSchema";

import { Button } from "components/Button";

import { postCredentials } from "modules/signUp/api";
import { useSignUpFormStyles } from "containers/SignUp/SignUpForm/useSignUpFormStyles";
import { signUpFormMock } from "modules/signUp/mocks";

import { ICredentials } from "modules/signUp/types/ICredentials";
import { EmailTextField } from "./EmailTextField";
import { PasswordTextField } from "./PasswordTextField";

const SignUpForm = () => {
  const classes = useSignUpFormStyles();
  const [signUpError, setSignUpError] = useState("");
  const [login, setLogin] = useState("");

  return (
    <>
      {signUpError && <StyledErrorBox>{signUpError}</StyledErrorBox>}
      {login !== "" && <StyledLoginBox>Witaj {login}</StyledLoginBox>}

      <Formik<ICredentials>
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSignUpFormSchema}
        onSubmit={async (values) => {
          signUpFormMock();
          const response = await postCredentials(values).catch(() => {
            setLogin("");
            setSignUpError("Błąd logowania");
          });
          if (response) {
            setSignUpError("");
            setLogin(response);
          }
          fetchMock.restore();
        }}
      >
        {({ isValid, isSubmitting, dirty }) => (
          <Form className={classes.form}>
            <EmailTextField />
            <PasswordTextField />
            <Button disabled={!isValid || isSubmitting || !dirty}>
              Sign In
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

const StyledErrorBox = styled.div`
  color: darkred;
  font-size: 18px;
`;

const StyledLoginBox = styled.div`
  color: darkgreen;
  font-size: 18px;
`;

export { SignUpForm };
