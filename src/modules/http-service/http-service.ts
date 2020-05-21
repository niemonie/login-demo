import { HttpService } from "./HttpService";

const host = process.env.REACT_APP_API_HOST;

const httpService = new HttpService({
  host,
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": "pl",
  },
});

export { httpService };
