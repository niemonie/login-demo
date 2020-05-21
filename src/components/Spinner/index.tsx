import React from "react";
import styled from "styled-components";
import { CircularProgress } from "@material-ui/core";

const Spinner = () => {
  return (
    <StyledSpinner>
      <CircularProgress />
    </StyledSpinner>
  );
};

const StyledSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  height: 100%;
`;

export { Spinner };
