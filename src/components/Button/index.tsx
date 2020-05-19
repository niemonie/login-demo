import React from "react";
import { default as MaterialUiButton } from "@material-ui/core/Button";

import { IChildrenProp } from "types";
import { makeStyles } from "@material-ui/core/styles";

interface IProps extends IChildrenProp {}

const Button = ({ children }: IProps) => {
  const useStyles = makeStyles((theme) => ({
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const classes = useStyles();

  return (
    <MaterialUiButton
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      className={classes.submit}
    >
      {children}
    </MaterialUiButton>
  );
};

export { Button };
