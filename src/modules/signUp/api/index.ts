import { httpService } from "../../http-service";

import { ICredentials } from "../types/ICredentials";

const postCredentials = (credentials: ICredentials) => {
  return httpService
    .post<{ login: string }, ICredentials>(`/credentials`, credentials)
    .then(({ login }) => login);
};

export { postCredentials };
