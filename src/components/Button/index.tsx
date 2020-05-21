import React from "react";
import { default as MaterialUiButton } from "@material-ui/core/Button";

import { useButtonStyles } from "./useButtonStyles";

import { IChildrenProp } from "types";

interface IProps extends IChildrenProp {
  disabled: boolean;
}

const Button = ({ disabled, children }: IProps) => {
  const classes = useButtonStyles();

  return (
    <MaterialUiButton
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      className={classes.submit}
      disabled={disabled}
    >
      {children}
    </MaterialUiButton>
  );
};

export { Button };
