import * as Yup from "yup";

import { ICredentials } from "modules/signUp/types/ICredentials";

export const validationSignUpFormSchema = Yup.object<ICredentials>().shape({
  email: Yup.string()
    .email("Nieprawidłowy email")
    .required("Email jest wymagany"),
  password: Yup.string()
    .min(5, "Hasło musi składać się z co najmniej 5 znaków")
    .required("Hasło jest wymagane"),
});
