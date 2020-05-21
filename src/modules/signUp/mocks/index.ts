import fetchMock from "fetch-mock";
import { shuffle } from "lodash";

import { ISignUpResponse } from "../types/ISignUpResponse";

const successResponse: ISignUpResponse = {
  status: 200,
  body: { login: "niemonie" },
};

const failureResponse = {
  status: 400,
};

const responses = [successResponse, failureResponse];

const signUpFormMock = () => {
  fetchMock.post(
    "http://localhost:3002/api/credentials",
    shuffle(responses)[0]
  );
};

export { signUpFormMock };
