import Form from "../Form/Form";
import {
  loginFormOptions,
  loginInitialValues,
  registerFormOptions,
  registerInitialValues,
} from "../../utils/options/authFormOptions";
import s from "./AuthForm.module.scss";

const AuthForm = ({ authType, cbOnSubmit }) => {
  return (
    <Form
      formOptions={
        authType === "login" ? loginFormOptions : registerFormOptions
      }
      formValues={
        authType === "login" ? loginInitialValues : registerInitialValues
      }
      cbOnSubmit={cbOnSubmit}
      moduleStyles={s}
    />
  );
};

export default AuthForm;
